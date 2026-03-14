#!/usr/bin/env node
/**
 * FDD Migration Audit Script
 * Analyzes a legacy src/ directory and outputs a migration candidate report.
 *
 * Usage: node analyze-migration.js [src-path]
 * Default src-path: ./src (relative to cwd)
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const SRC_DIR = path.resolve(args[0] || path.join(process.cwd(), 'src'));

if (!fs.existsSync(SRC_DIR)) {
  console.error(`Error: src directory not found at "${SRC_DIR}".`);
  console.error('Run this from the project root or pass the src path as an argument.');
  process.exit(1);
}

const IGNORE_DIRS = new Set(['features', 'node_modules', '.git', 'dist', 'build', 'public', '__tests__', '__mocks__']);
const CODE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx']);
const LAYER_DIRS = new Set(['components', 'hooks', 'services', 'utils', 'types', 'api', 'lib']);

function getFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) getFiles(fullPath, results);
    } else if (CODE_EXTENSIONS.has(path.extname(entry.name))) {
      results.push(fullPath);
    }
  }
  return results;
}

function classifyLayer(filePath) {
  const lower = filePath.toLowerCase();
  if (lower.includes(`${path.sep}hooks${path.sep}`) || path.basename(filePath).startsWith('use')) return 'hooks';
  if (lower.includes(`${path.sep}types${path.sep}`) || lower.includes(`${path.sep}interfaces${path.sep}`)) return 'types';
  if (lower.includes(`${path.sep}services${path.sep}`) || lower.includes(`${path.sep}api${path.sep}`) || lower.includes(`${path.sep}lib${path.sep}`)) return 'services';
  const base = path.basename(filePath, path.extname(filePath));
  if (/^[A-Z]/.test(base) || lower.includes(`${path.sep}components${path.sep}`)) return 'components';
  return 'services'; // fallback: utils/misc go to services layer for FDD review
}

function inferFeature(relativePath) {
  const parts = relativePath.split(path.sep);
  if (parts.length < 2) return '__root__';
  const topDir = parts[0];
  const subDir = parts[1];

  if (LAYER_DIRS.has(topDir.toLowerCase())) {
    // Pattern: components/Auth/Login.tsx → feature = auth
    // If subDir is itself a component file (has extension), it's unclassifiable → shared
    return path.extname(subDir) ? 'shared' : subDir.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  }
  // Pattern: auth/Login.tsx → feature = auth
  return topDir.toLowerCase().replace(/[^a-z0-9-]/g, '-');
}

function analyze() {
  const files = getFiles(SRC_DIR);
  const candidates = {};
  const rootFiles = [];

  files.forEach(file => {
    const rel = path.relative(SRC_DIR, file);
    const parts = rel.split(path.sep);
    if (parts[0] === 'features') return; // skip already-converted

    if (parts.length < 2) {
      rootFiles.push(rel);
      return;
    }

    const feature = inferFeature(rel);
    if (!candidates[feature]) candidates[feature] = { components: [], hooks: [], services: [], types: [] };
    candidates[feature][classifyLayer(file)].push(rel);
  });

  console.log('# FDD Migration Audit Report');
  console.log(`Scanned: ${SRC_DIR}`);
  console.log(`Generated: ${new Date().toISOString()}\n`);

  if (rootFiles.length) {
    console.log('## ⚠️  Root-Level Files (Review Manually)');
    console.log('These files live directly in src/ and may need feature assignment or can stay as entrypoints.\n');
    rootFiles.forEach(f => console.log(`- \`${f}\``));
    console.log();
  }

  const sorted = Object.entries(candidates).sort(([a], [b]) => a.localeCompare(b));
  console.log(`## Feature Candidates (${sorted.length} found)\n`);

  for (const [feature, data] of sorted) {
    const total = Object.values(data).flat().length;
    if (total === 0) continue;

    const displayName = feature.charAt(0).toUpperCase() + feature.slice(1);
    console.log(`### 📦 ${displayName} (${total} files)`);
    console.log('| Layer | Original Path | Suggested FDD Path |');
    console.log('| :--- | :--- | :--- |');

    for (const [layer, fileList] of Object.entries(data)) {
      fileList.forEach(p => {
        const fddPath = `src/features/${feature}/${layer}/${path.basename(p)}`;
        console.log(`| ${layer} | \`${p}\` | \`${fddPath}\` |`);
      });
    }
    console.log();
  }

  console.log('## Next Steps for AI\n');
  console.log('1. Review the table and confirm feature groupings with the user.');
  console.log('2. Identify cross-feature files for `src/features/shared/`.');
  console.log('3. For each feature (one at a time):');
  console.log('   a. Run `node scaffold-feature-move.js <feature> <layer> <files...>`');
  console.log('   b. Fix absolute imports in moved files.');
  console.log('   c. Verify the `index.ts` public API exports.');
  console.log('4. Repeat until all features are migrated.');
}

analyze();

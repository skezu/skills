#!/usr/bin/env node
/**
 * FDD Feature Scaffolding Script
 * Moves files into the FDD structure and auto-updates index.ts exports.
 *
 * Usage: node scaffold-feature-move.js <feature-name> <layer> <file1> [file2 ...]
 * Example: node scaffold-feature-move.js auth components src/components/Login.tsx
 *
 * Layers: components | hooks | services | types
 */

const fs = require('fs');
const path = require('path');

const VALID_LAYERS = new Set(['components', 'hooks', 'services', 'types']);
const CODE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx']);

const [, , featureName, layer, ...files] = process.argv;

// --- Validation ---
if (!featureName || !layer || files.length === 0) {
  console.error('Usage: node scaffold-feature-move.js <feature-name> <layer> <file1> [file2 ...]');
  console.error(`Valid layers: ${[...VALID_LAYERS].join(', ')}`);
  process.exit(1);
}

if (!VALID_LAYERS.has(layer)) {
  console.error(`Error: "${layer}" is not a valid FDD layer.`);
  console.error(`Valid layers: ${[...VALID_LAYERS].join(', ')}`);
  process.exit(1);
}

const BASE_DIR = process.cwd();
const FEATURE_ROOT = path.join(BASE_DIR, 'src', 'features', featureName);
const LAYER_DIR = path.join(FEATURE_ROOT, layer);
const FEATURE_INDEX = path.join(FEATURE_ROOT, 'index.ts');
const LAYER_INDEX = path.join(LAYER_DIR, 'index.ts');

// --- Helpers ---
function appendIfMissing(filePath, line, header = '') {
  const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  if (!existing.includes(line.trim())) {
    if (!existing && header) fs.appendFileSync(filePath, header);
    fs.appendFileSync(filePath, line);
    return true;
  }
  return false;
}

// --- Create feature/layer directories ---
fs.mkdirSync(LAYER_DIR, { recursive: true });

let movedCount = 0;

files.forEach(file => {
  const source = path.isAbsolute(file) ? file : path.resolve(BASE_DIR, file);
  const fileName = path.basename(source);
  const target = path.join(LAYER_DIR, fileName);
  const ext = path.extname(fileName);

  if (!fs.existsSync(source)) {
    console.warn(`⚠️  Skipping (not found): ${source}`);
    return;
  }

  // Move the file
  fs.renameSync(source, target);
  movedCount++;
  console.log(`✅ Moved: ${file} → src/features/${featureName}/${layer}/${fileName}`);

  // Update layer index.ts
  if (CODE_EXTENSIONS.has(ext)) {
    const exportName = path.basename(fileName, ext);
    const exportLine = `export * from './${exportName}';\n`;
    const layerHeader = `// ${featureName}/${layer} — public layer exports\n`;
    const added = appendIfMissing(LAYER_INDEX, exportLine, layerHeader);
    if (added) console.log(`   ↳ Added to ${layer}/index.ts: export * from './${exportName}'`);
  }
});

if (movedCount === 0) {
  console.error('No files were moved. Check paths and try again.');
  process.exit(1);
}

// Update feature root index.ts
const layerExport = `export * from './${layer}';\n`;
const featureHeader = `// ${featureName} — public feature API\n`;
const added = appendIfMissing(FEATURE_INDEX, layerExport, featureHeader);
if (added) console.log(`\n📄 Updated features/${featureName}/index.ts: export * from './${layer}'`);

console.log(`\n🎉 Done! ${movedCount} file(s) moved into src/features/${featureName}/${layer}/`);
console.log(`\n⚠️  Reminder: Update absolute imports in moved files to use '@/features/...' paths.`);

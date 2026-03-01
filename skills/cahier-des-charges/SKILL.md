---
name: cahier-des-charges
description: Rédige un Cahier des Charges (CdC) professionnel en français. Utilise ce skill pour transformer des spécifications techniques (requirements.md, design.md) en un document de cadrage formel destiné aux parties prenantes. Le CdC définit le périmètre, les objectifs, les besoins fonctionnels et techniques, ainsi que les contraintes du projet.
---

# Cahier des Charges (CdC)

Ce skill permet de générer un document de spécifications fonctionnelles et techniques complet en français, basé sur la méthodologie agile et les standards industriels.

## Flux de travail

1. **Analyse des entrées** : Lire les fichiers `.agent/specs/{feature-name}/requirements.md` et `design.md` générés par le skill `spec-driven-dev`.
2. **Structuration** : Utiliser le template standard (voir `references/template.md`).
3. **Rédaction** : Rédiger le contenu en français professionnel, clair et structuré.
4. **Validation** : Vérifier que tous les points des requirements sont couverts.

## Structure du Document

Le document produit doit suivre cet ordre :
- **Introduction** : Contexte du projet et objectifs globaux.
- **Besoins Fonctionnels** : Description détaillée des fonctionnalités (User Stories, critères d'acceptation).
- **Spécifications Techniques** : Architecture, stack technologique, interfaces.
- **Contraintes** : Sécurité, performance, maintenance, accessibilité.
- **Livrables** : Ce qui sera fourni à la fin du projet.
- **Planning Prévisionnel** : Jalons principaux.

## Règles de Rédaction

- **Langue** : Français formel (Vouvoiement si nécessaire, ton professionnel).
- **Précision** : Éviter le jargon inutile, expliquer les termes techniques.
- **Action** : Utiliser des verbes d'action.
- **Structure** : Utiliser des listes à puces et des tableaux pour la lisibilité.

## Ressources

- [Template de CdC](references/template.md) : Structure de base recommandée.
- [Exemple de CdC](references/example.md) : Exemple concret d'un projet type.

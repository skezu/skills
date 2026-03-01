# Cahier des Charges - Todo App Manager

## 1. Introduction du Projet
### 1.1 Contexte
Le projet "Todo App Manager" est lancé pour répondre au besoin croissant de productivité personnelle. Actuellement, les solutions du marché sont soit trop complexes, soit manquent de fonctionnalités de synchronisation.

### 1.2 Objectifs principaux
- Permettre la gestion de tâches quotidiennes.
- Assurer une synchronisation multi-dispositifs.
- Garantir une interface utilisateur intuitive et rapide.

### 1.3 Périmètre
Inclus : Application Web, Authentification, API REST, Base de données.
Exclu : Application Mobile native (à venir en phase 2), Intégration calendrier tiers.

## 2. Besoins Fonctionnels
### 2.1 Profils utilisateurs (Personas)
- Utilisateur standard : Souhaite organiser sa journée.
- Administrateur : Gère les comptes et la plateforme.

### 2.2 Descriptions des fonctionnalités (User Stories)

| ID | Fonctionnalité | Rôle | Description | Critères d'acceptation |
|----|----------------|------|-------------|-------------------------|
| F01| Créer tâche    | User | Ajouter une nouvelle tâche avec un titre. | La tâche apparaît immédiatement dans la liste. |
| F02| Marquer terminée| User | Cocher une tâche pour indiquer sa réalisation. | La tâche est barrée et son statut est mis à jour. |
| F03| Supprimer tâche| User | Retirer définitivement une tâche. | Un message de confirmation s'affiche avant suppression. |

## 3. Spécifications Techniques
### 3.1 Architecture système
Architecture Client-Serveur basée sur une application Single Page (SPA) communiquant via une API REST JSON.

### 3.2 Stack technologique
- Frontend : React (TypeScript), Tailwind CSS.
- Backend : Node.js (Express), PostgreSQL via Prisma.
- Infrastructure : Docker, Vercel.

### 3.3 Intégrations et APIs
- Auth0 pour la gestion de l'authentification et du SSO.

## 4. Contraintes et Qualité
### 4.1 Sécurité
- Chiffrement des mots de passe avec Argon2.
- Conformité RGPD pour le stockage des données personnelles.

### 4.2 Performance
- Chargement initial < 1.5s.
- Supporte 1000 utilisateurs simultanés.

### 4.3 Accessibilité
- Respect des standards WCAG 2.1 niveau AA.
- Support complet de la navigation au clavier.

## 5. Livrables et Planning
### 5.1 Livrables attendus
- Code source complet sur GitHub.
- Documentation utilisateur et technique.
- Rapports de tests automatisés (Unit & E2E).

### 5.2 Jalons clés
| Jalon | Description | Échéance estimée |
|-------|-------------|------------------|
| M1    | Validation des spécifications | S01 |
| M2    | Développement du MVP | S04 |
| M3    | Tests et déploiement final | S06 |

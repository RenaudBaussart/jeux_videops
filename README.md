# Jeux vidéops - Hub de jeux vidéo en ligne

Bienvenue sur le dépôt de **Jeux vidéops**, un projet étudiant centré sur l'intégration et le déploiement continus (CI/CD). 
Ce projet agrège deux jeux web indépendants ("Two Ships Passing In The Night" et "Space Invaders") au sein d'un hub global, soutenu par une usine logicielle automatisée gérant la compilation, les tests, la conteneurisation et le déploiement.

## Contexte & Objectifs
* Développer une usine logicielle robuste via GitHub Actions.
* Unifier des projets hétérogènes dans un seul livrable fonctionnel.
* Automatiser les tests, l'audit de sécurité et le linting.
* Déployer l'interface web statique automatiquement sur GitHub Pages.
* Générer et héberger une image Docker du projet complet sur le GitHub Container Registry (GHCR).

## Stack Technique
* **Hub (Interface globale)** : HTML5, Tailwind CSS
* **Jeux intégrés** : Javascript Vanilla, Vite
* **Tests & Qualité** : Jest, ESLint, npm audit
* **CI/CD** : GitHub Actions
* **Conteneurisation** : Docker, serveur web Nginx (version Alpine)
* **Hébergement** : GitHub Pages & GHCR

## Architecture du Pipeline (CI/CD)
Le projet respecte une architecture modulaire :
* `master_workflow.yml` : Le workflow maître qui orchestre l'assemblage et le déploiement.
* `ci_two_ship.yml` : Workflow gérant les tests et le build du jeu Two Ships.
* `ci_space_invaders.yml` : Workflow gérant les tests et le build de Space Invaders.

Une fois les sous-projets compilés, l'étape finale assemble les dossiers statiques, génère l'image Docker globale basée sur Nginx, et déploie le tout.

## Installation & Déploiement Local
Le projet est entièrement conteneurisé. Vous pouvez télécharger et lancer le hub très facilement sur votre machine via Docker.

1. Récupérez la dernière image disponible sur le registre public :
```bash
docker pull ghcr.io/renaudbaussart/hub-jeux:latest
```

2. Lancez le conteneur en exposant le port de votre choix (ex: 8080) :
```bash
docker run -d -p 8080:80 ghcr.io/renaudbaussart/hub-jeux:latest
```
Le hub sera directement accessible depuis votre navigateur sur `http://localhost:8080`.

## Livrables Inclus
* Code source des jeux et de l'interface d'accueil.
* Workflows d'automatisation GitHub Actions.
* `Dockerfile` global.

## Credits

### sur le projet global :
* [Alison Dehaies](https://github.com/Meegy-exe) - CI/CD & Intégration Space Invaders | developpement page hub
* [Renaud Baussart](https://github.com/RenaudBaussart) - CI/CD & Intégration Two Ships | Assemblage & Dockerisation

### sur les jeux :
* [razh](https://github.com/razh) : [Two Ships Passing In The Night](https://github.com/razh/js13k-2021/tree/main?tab=readme-ov-file)
* [Konrad Linkowski](https://github.com/KonradLinkowski) : [Space Invaders](https://github.com/KonradLinkowski/SpaceInvaders/tree/main)
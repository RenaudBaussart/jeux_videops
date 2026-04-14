# État des Lieux : Audit de Sécurité

## Résumé
voici un listing des vulnérabilités identifiées dans les dépendances de notre projet, accompagnées de recommandations pour les corriger.

| Paquet vulnérable | Sévérité | Type de risque (CVE) | Moyen de correction (Fix) |
| :--- | :---: | :--- | :--- |
| **braces** (< 3.0.3) | 🔴 Haute | DoS (Consommation de ressources) | Mise à jour vers **Gulp 5.0.1** |
| **cross-spawn** (< 6.0.6) | 🔴 Haute | ReDoS (Déni de service) | Mise à jour vers **gulp-advzip 1.0.1** |
| **esbuild** (<= 0.24.2) | 🟡 Modérée | Accès non autorisé au serveur dev | Mise à jour vers **Vite 8.0.8** |
| **got** (<= 11.8.3) | 🔴 Haute | Redirection socket UNIX | Mise à jour de **gulp-advzip** |
| **http-cache-semantics** | 🔴 Haute | ReDoS (Déni de service) | Mise à jour vers **gulp-advzip 1.0.1** |
| **nth-check** (< 2.0.1) | 🔴 Haute | Complexité d'expression régulière | Mise à jour vers **inline-source 8.0.3** |
| **rollup** (<= 2.79.2) | 🔴 Haute | XSS et écriture de fichiers | Mise à jour vers **Rollup 2.80.0** |
| **semver-regex** | 🔴 Haute | ReDoS (Déni de service) | Mise à jour via la chaîne de build |
| **terser** (5.0.0 - 5.14.1) | 🔴 Haute | ReDoS (Déni de service) | Mise à jour vers **gulp-terser 2.1.0** |
| **trim-newlines** (< 3.0.1) | 🔴 Haute | DoS (Consommation de ressources) | Exécuter `npm audit fix` simple |

## Stratégie de Gestion des Vulnérabilités
la resolution des ces vulnérabilités est prise en compte mais nous ne pouvons pas appliqué les correctifs du au fait de trop grand changement de dépendances(changement de version majeur) qui pourrait engendrer des bugs et des régressions.
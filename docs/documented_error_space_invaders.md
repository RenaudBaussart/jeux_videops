# Etat des lieux : Audit de Sécurité (Space Invaders)
## Résumé
Voici le listing des vulnérabilités identifiées dans les dépendances de notre projet lors de l'étape de CI (`npm audit`), accompagnéees des recommandations théoriques pour les corriger.


| Paquet vulnérable | Sévérité | Type de risque (CVE) | Moyen de correction (Fix) |
| :--- | :---: | :--- | :--- |
| **node-forge** | 🔴 Haute | Prototype Pollution / Signature Forgery | Migration vers `parcel@2` ou `vite` |
| **ws** | 🔴 Haute | ReDoS (Déni de service régulier) | Migration vers `parcel@2` ou `vite` |
| **terser** | 🔴 Haute | ReDoS (Déni de service) | Migration vers `parcel@2` ou `vite` |
| **nth-check** | 🔴 Haute | Complexité d'expression régulière | Exécuter `npm audit fix` |
| **braces** | 🔴 Haute | DoS (Consommation de ressources) | Exécuter `npm audit fix` |

*(Note:) la majorité de ces failles sont héritées en casdades par notre dépendance principale de compilation `parcel-bundler`).*

## Stratégie de Gestion des Vulnérabilités (DevSecOps)

La résolution de ces vunérabilités a été prise en compte et analysée. Cependant, nous avons décidé de **ne pas appliquer** les correctifs liés à `parcel-bundler`.

**Pourquoi ce choix ?**
1. **Risque de régression :**
Appliquer les correctifs nécessiterait un changement de version majeur (passer à Parcel v2 ou changer de bundler), ce qui briserait la compilation actuelle du jeu hérité (legacy).

2. **Acceptation du risque:** 
Ces vulnérabilités tocuhent uniquement l'environnement de développement (serveur local et outils de build). Une fois le jeu compilé pour la production (fichiers HTML/JS statiques minifiés), ces paquets vulnérables ne sont pas embarqués ni exposés aux joueurs. Le risque en production est donc nul. 
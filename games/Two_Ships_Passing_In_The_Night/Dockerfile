# Étape 1 : Construction (Builder)
# utilise une image Node.js légère (alpine)
FROM node:20 AS builder

# définit le dossier de travail dans le conteneur
WORKDIR /app

# copie d'abord les fichiers de dépendances pour optimiser le cache Docker
COPY package*.json ./

# installe les dépendances
RUN npm install

# copie le reste du code source
COPY . .

# compile le jeu (cela va créer le dossier /dist)
RUN npm run build

# Étape 2 : Production (Serveur Web)
# utilise Nginx, un serveur web ultra léger et performant
FROM nginx:alpine

# copie les fichiers compilés depuis l'étape 1 (builder) vers le dossier public de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# expose le port 80 (le port standard du web)
EXPOSE 80

# lance Nginx en arrière-plan   
CMD ["nginx", "-g", "daemon off;"]
# 1. On utilise un serveur web Nginx très léger
FROM nginx:alpine

# 2. On prend le dossier hub-global généré par notre GitHub Action
# et on le met dans le dossier public du serveur web
COPY ./hub-global /usr/share/nginx/html

# 3. On indique que le serveur écoute sur le port 80
EXPOSE 80
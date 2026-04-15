# limage doit etre basée sur une image officielle
FROM nginx:alpine

# définit le répertoire de travail dans le conteneur
# WORKDIR /app

# copier le build (artifact) vers le dossier nginx utiliser pour servir les files
# copier le build vers...
COPY build/ /usr/share/nginx/html/


# configurer le port
EXPOSE 80

# important, commande de démarrage
CMD ["nginx", "-g", "daemon off;"]
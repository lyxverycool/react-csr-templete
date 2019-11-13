FROM node:7.3.0

RUN apt-get update \    && apt-get install -y nginx

RUN  npm install \   && npm run build:prod

COPY ./dist/ /usr/share/nginx/html/

EXPOSE 80
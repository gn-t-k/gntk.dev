FROM node:12

WORKDIR /usr/src/app

RUN npm install -g gatsby-cli

EXPOSE 8000

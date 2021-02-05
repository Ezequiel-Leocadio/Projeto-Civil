FROM node:14 AS build

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm  build

EXPOSE 3000

CMD [ "npm", "start"]

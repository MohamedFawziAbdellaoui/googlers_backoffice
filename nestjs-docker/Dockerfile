FROM node:19 AS builder

WORKDIR /usr/src/app
RUN npm i -g @nestjs/cli
COPY package*.json ./

COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
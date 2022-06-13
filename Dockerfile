FROM node:14-alpine3.10

WORKDIR /app

EXPOSE 8080

COPY package*.json ./

RUN npm install
RUN npm install @vue/cli@3.7.0
RUN npm install -g serve

COPY . .

CMD ["npm", "run", "start:prod"]
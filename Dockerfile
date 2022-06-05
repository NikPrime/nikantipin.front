FROM node:14-alpine3.10

WORKDIR /app

EXPOSE 80

COPY package*.json ./

RUN npm install
RUN npm install @vue/cli@3.7.0 -g

COPY . .

CMD ["npm", "run", "start"]
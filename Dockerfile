FROM node:20-alpine

WORKDIR /app

COPY *.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]

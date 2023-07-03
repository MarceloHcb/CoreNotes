FROM node:latest

WORKDIR /app-backend

COPY package*.json ./

RUN npm install

COPY .env ./
COPY . .
EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]

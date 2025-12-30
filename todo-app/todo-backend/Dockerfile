FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set strict-ssl false && npm install

COPY --chown=node:node . .

USER node

ENV DEBUG=todo-express-backend:*

CMD npm start
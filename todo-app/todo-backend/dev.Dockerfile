FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm config set strict-ssl false && npm install

USER node

ENV DEBUG=todo-express-backend:*

CMD ["npm", "start"]
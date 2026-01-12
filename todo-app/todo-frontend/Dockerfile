FROM node:20 AS build

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm config set strict-ssl false
RUN npm ci
RUN npm run build

FROM node:20 AS test

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app/

RUN npm test

FROM node:20 AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist

RUN npm config set strict-ssl false
RUN npm install -g serve

CMD ["serve", "dist"]


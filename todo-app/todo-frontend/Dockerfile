FROM node:20 AS build

WORKDIR /usr/src/app

COPY . .
# Default value for the backend URL
ARG VITE_BACKEND_URL=http://localhost:8080/api
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm config set strict-ssl false && \
    npm ci && \
    npm run build

FROM node:20 AS test

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app/

RUN npm test

FROM node:20 AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist

RUN npm config set strict-ssl false && \
    npm install -g serve

CMD ["serve", "dist"]


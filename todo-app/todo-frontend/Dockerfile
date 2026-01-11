FROM node:20

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm config set strict-ssl false && npm ci && npm run build && npm install -g serve

CMD ["serve", "dist"]
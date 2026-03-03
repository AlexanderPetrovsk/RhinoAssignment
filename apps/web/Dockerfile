FROM node:alpine

WORKDIR /apps/web

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "run", "dev"]
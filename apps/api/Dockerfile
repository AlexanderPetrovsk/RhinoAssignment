FROM node:alpine

WORKDIR /apps/api

RUN apk add --no-cache openssl

COPY package.json package-lock.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate


RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
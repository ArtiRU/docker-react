FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG PROTOCOL=http
ARG HOST_URL=45.147.201.155:3000

RUN echo "PROTOCOL=$PROTOCOL" > .env && \
    echo "HOST_URL=$HOST_URL" >> .env

RUN npm run build
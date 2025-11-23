FROM node:18-alpine AS build

WORKDIR /app

ARG PROTOCOL
ARG HOST_URL

ENV PROTOCOL=$PROTOCOL
ENV HOST_URL=$HOST_URL

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
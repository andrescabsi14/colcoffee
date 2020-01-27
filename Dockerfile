# build stage

FROM node:12-stretch AS build

WORKDIR /build

COPY package-lock.json package.json ./

RUN npm ci

COPY . .


# runtime stage

FROM alpine:3.10

RUN apk add --update nodejs
RUN apk add --update npm

RUN npm i -g nodemon

RUN addgroup -S node && adduser -S node -G node

USER node


RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --from=build --chown=node:node /build .


CMD ["nodemon", "index.js"]
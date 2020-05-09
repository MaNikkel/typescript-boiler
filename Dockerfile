# * FOR DEV USE

FROM node:12.16-alpine3.11

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN yarn

EXPOSE 3333

CMD [ "yarn", "start" ]
FROM node:16

ENV APP_ROOT /frontend
WORKDIR $APP_ROOT

ADD ./package.json $APP_ROOT/package.json
ADD ./yarn.lock $APP_ROOT/yarn.lock

RUN yarn install
ADD . $APP_ROOT
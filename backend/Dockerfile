FROM ruby:3.0.0

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update -qq && \
    apt-get install -y build-essential \
                       libpq-dev \
                       nodejs
                       
RUN npm install --global yarn

ENV APP_ROOT /backend
WORKDIR $APP_ROOT

ADD ./Gemfile $APP_ROOT/Gemfile
ADD ./Gemfile.lock $APP_ROOT/Gemfile.lock

RUN bundle install
ADD . $APP_ROOT
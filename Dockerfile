FROM node:16

ARG PORT=3000

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

EXPOSE ${PORT}

CMD yarn start -p 3000
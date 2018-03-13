FROM node:8 as builder

WORKDIR /usr/src/app

COPY package.json ./
RUN yarn install

COPY . ./
RUN yarn run build

FROM nginx 
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
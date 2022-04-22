FROM node:14.15.1-alpine3.12
RUN npm install -g serve
RUN mkdir /app
WORKDIR /app
RUN mkdir ./build 
COPY ./build ./build
ENTRYPOINT ["serve", "-s", "build"]
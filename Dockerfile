FROM node:14
WORKDIR /app

COPY index.js .
COPY package.json .
COPY service service

RUN ls
RUN pwd

RUN yarn

RUN ls

EXPOSE 3000

CMD ["nodemon", "index.js"]

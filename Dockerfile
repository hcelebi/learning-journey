FROM node:14
WORKDIR /app

COPY index.js .
COPY package.json .

RUN ls
RUN pwd

RUN yarn

RUN ls

EXPOSE 3000

CMD ["node", "index.js"]
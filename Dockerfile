FROM node:14.1-alpine

WORKDIR "/user/app"

COPY package*.json ./

RUN npm install

COPY index.js .

EXPOSE 3000

CMD ["npm", "start"]

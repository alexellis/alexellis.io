FROM node:10-alpine

WORKDIR /root/

COPY package.json	.
RUN npm i

COPY . .
EXPOSE 3000

CMD ["node", "app.js"]

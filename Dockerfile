FROM node:8.9.4-alpine

WORKDIR /root/

COPY package.json	.
RUN npm i

COPY . .
EXPOSE 3000

CMD ["node", "app.js"]

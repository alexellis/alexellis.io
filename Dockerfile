FROM node:17-alpine

WORKDIR /root/

COPY package.json	.
RUN npm i

COPY . .

EXPOSE 3000
CMD ["npm", "start"]

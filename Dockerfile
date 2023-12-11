FROM node:20.10.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 8080
CMD [ "npm", "start --port 8080" ]

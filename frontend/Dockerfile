FROM node:latest AS react_development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

#docker run --publish 3000:3000 
################
## PRODUCTION ##
################
FROM node:latest AS react_production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=react_development /usr/src/app/ .

RUN npm install 

EXPOSE 3000

CMD [ "npm", "run" ,"start" ]
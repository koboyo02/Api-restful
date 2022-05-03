FROM node:latest
RUN apt-get update \
&& apt-get -y upgrade
COPY ./Api_node ./Api_node
WORKDIR /Api_node
RUN npm install -g npm
RUN npm i cookie-parser logger morgan
EXPOSE 5500
CMD npm start
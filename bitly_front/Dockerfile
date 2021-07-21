# base image
FROM node:latest
# set working directory
WORKDIR /app
# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@3.7.0 -g
# start app
CMD ["npm", "run", "serve"]
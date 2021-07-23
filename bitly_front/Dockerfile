# base image
FROM node:latest
# set working directory
WORKDIR /app
# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @vue/cli@4.5.12

# start app
CMD ["npm", "run", "serve"]
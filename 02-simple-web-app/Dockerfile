# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install some dependencies
COPY ./index.js ./
COPY ./package.json ./
RUN npm install

# Default command
CMD ["npm", "start"]
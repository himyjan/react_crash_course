#docker build -t react . --no-cache && docker run react
# Stage 1 - Build React App inside temporary Node container
# pull official base image
FROM node:alpine as react-build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]

# WORKDIR /usr/src/app
# COPY . ./
# RUN npm install
# RUN npm run start

# # Stage 2 - Deploy with NGNIX
# FROM nginx:latest

# COPY --from=react-build /usr/src/app/build /var/www
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 3000

# ENTRYPOINT ["nginx","-g","daemon off;"]

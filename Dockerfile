# node image
FROM node:22-alpine AS build

# working directory 
WORKDIR /app

# copy package.json and package-lock.json
COPY package.json package-lock.json ./

# install dependencies
RUN npm install

# copy all source files
COPY . .

# build react app
RUN npm run build

# Serve the build using a lightweight Nginx server
FROM nginx:alpine

# Copy built files from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 
EXPOSE 80

# start Nginx
CMD ["nginx", "-g", "daemon off;"]

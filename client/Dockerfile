# Use Node.js 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Build the React app
COPY . .
RUN npm run build


# Expose port 80
EXPOSE 80

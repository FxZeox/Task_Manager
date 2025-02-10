# Use Node.js 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to start the application
CMD ["node", "server.js"]

# Use a lightweight Node.js base image
FROM node:14-alpine

# Set working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all app source
COPY . .

# Fix for Docker + React Refresh issues
ENV CHOKIDAR_USEPOLLING=true
ENV FAST_REFRESH=false

# Expose port for React dev server
EXPOSE 3000

# Start the dev server
CMD ["npm", "start"]

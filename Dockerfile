# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

COPY . .

# Expose the port the app runs on (optional)
EXPOSE 3000

# Command to run the app (example for a Node.js app)
CMD ["node", "index.js"]

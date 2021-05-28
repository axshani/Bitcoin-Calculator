# This Dockerfile ment for the development environment only!
# Thats why there is no npm run build :D
FROM node:alpine

# Set the working dir to be app (this is optional but recommended)
WORKDIR /app

# Copy all the file (except what that is in the .dockerignore)
COPY . .

# Install all the dependencies
RUN npm install

# Expose the port to all the other containers that run in the same socker compose
EXPOSE 80

# This will start the webpack in port 3000 (unless env Port = ?AnotherPort?)
# RUN npm start - Doesn't work because it heppends in build time (not runtime)
CMD [ "npm", "start" ]
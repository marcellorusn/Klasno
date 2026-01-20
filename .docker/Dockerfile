# Use Node 22 - LTS version with latest npm/yarn compatibility
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files (lock file ensures deterministic installs)
COPY package.json yarn.lock ./

# Install all dependencies (including devDependencies) inside container
# This ensures no node_modules from host system are used
RUN yarn install --frozen-lockfile

# Copy entire project after dependencies are installed
# This way, if dependencies change, Docker uses the cached layer above
COPY . .

# Expose the development server port
EXPOSE 5174

# Run Vite dev server with network access from host machine
# --host 0.0.0.0 allows connections from outside the container
# --port 5174 ensures consistent port inside container
CMD ["yarn", "dev", "--host", "0.0.0.0", "--port", "5174"]
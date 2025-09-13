# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the code
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose port (Next.js default is 3000)
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]

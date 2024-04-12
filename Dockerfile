FROM node:20-alpine
WORKDIR /usr/server
COPY . .
RUN npm ci --only=production
EXPOSE 8000
CMD ["npm", "start"]

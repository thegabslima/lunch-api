FROM --platform=linux/amd64 node:16.20-alpine3.16 AS builder
WORKDIR /app
ENV NODE_ENV=production

# Copy the node module specification
COPY package.json package.json
COPY package-lock.json package-lock.json

# Install the app dependencies
RUN npm i -g @nestjs/cli@9.3.0
RUN npm ci --only=prod

# Copy files
COPY . .

# Build app
RUN npm run build

FROM --platform=linux/amd64 node:16.20-alpine3.16 as production

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Copy static assets from builder stage
COPY --from=builder /app/.env .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Run
ENTRYPOINT ["node", "dist/src/main.js"]

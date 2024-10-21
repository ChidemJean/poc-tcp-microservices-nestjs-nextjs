# Base image
FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 8091

RUN apk add --no-cache openssl

RUN mkdir -p /app/ssl && \
    openssl req -nodes -new -x509 -keyout /app/ssl/server.key -out /app/ssl/server.cert -days 365 -subj "/C=BR/ST=SP/L=SaoPaulo/O=MyOrg/OU=IT/CN=example.com"

ENV SSL_KEY_FILE="/app/ssl/server.key"
ENV SSL_CERT_FILE="/app/ssl/server.cert"

# Builder stage
FROM base as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Production stage
FROM base as production
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci --omit=dev

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001
USER nestjs

COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD npm run start:prod

# Development stage
FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD npm run start:debug
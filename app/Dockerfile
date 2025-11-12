# Multi-stage build for Astro Landing Page
# Optimized for Coolify, Docker, and self-hosted deployments

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies for build
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

# Add non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 astro

# Copy built assets from builder
COPY --from=builder --chown=astro:nodejs /app/dist ./dist
COPY --from=builder --chown=astro:nodejs /app/package*.json ./

# Install only production dependencies for serving
RUN npm ci --only=production && npm cache clean --force

# Install serve for static hosting
RUN npm install -g serve

USER astro

EXPOSE 4321

ENV NODE_ENV=production
ENV PORT=4321

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4321', (r) => {if (r.statusCode !== 200) throw new Error('Health check failed')})"

# Start the app with serve (static files)
CMD ["serve", "dist", "-l", "4321", "--single"]

# Alternative: Use Astro preview server (if you want SSR)
# CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4321"]

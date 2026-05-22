# ============================================================
# Mudanting (Peony Pavilion) - Digital Humanities Project
# Next.js 14 production build
# ============================================================

FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (leverage Docker cache)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ============================================================
# Production image
# ============================================================

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy built artifacts from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

# (Optional) Copy env file — in production, prefer environment variables
COPY .env.local ./.env.local

EXPOSE 3000

CMD ["npm", "start"]

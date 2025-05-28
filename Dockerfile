# Install dependencies only when needed
FROM --platform=linux/amd64 node:18-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock* ./
RUN apk add --no-cache ca-certificates
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM --platform=linux/amd64 node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache ca-certificates
RUN yarn build

# Production image, copy all the files and run next
FROM --platform=linux/amd64 node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 8080

ENV PORT=8080
# set hostname to localhost
ENV HOSTNAME="0.0.0.0"

CMD ["yarn", "start"]
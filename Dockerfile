FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY .pnp.cjs ./
COPY .pnp.loader.mjs ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn
RUN ls -a
RUN yarn install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/.yarn ./.yarn
COPY --from=deps /app/.pnp.cjs ./
COPY --from=deps /app/.pnp.loader.mjs ./
COPY --from=deps /app/.yarnrc.yml ./
COPY . .
RUN ls -a
RUN yarn build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.pnp.cjs ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
RUN rm -rf ./.yarn/cache
COPY --from=builder --chown=nextjs:nodejs /app/.yarn ./.yarn/

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "-r", "./.pnp.cjs", "server.js"]

# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Base — Node 22 LTS (Next.js 16 minimal Node 20.9).
# libc6-compat dibutuhkan sharp/Next di Alpine (musl).
# ---------------------------------------------------------------------------
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@10.11.0 --activate
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# ---------------------------------------------------------------------------
# Deps — install dependency saja, supaya layer ini ter-cache selama
# package.json / pnpm-lock.yaml tidak berubah.
# ---------------------------------------------------------------------------
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
# --ignore-scripts melewati `prepare: husky` (tidak ada .git di dalam image).
# Dependency di project ini tidak butuh build script apa pun.
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts

# ---------------------------------------------------------------------------
# Builder — build Next.js jadi output standalone.
# ---------------------------------------------------------------------------
FROM base AS builder
WORKDIR /app

# Variabel NEXT_PUBLIC_* di-inline ke bundle client saat BUILD, bukan runtime.
# Kalau butuh nilai selain default di src/constants/env.ts, kirim lewat
# --build-arg (lihat docker-compose.yml).
ARG NEXT_PUBLIC_APP_DOMAIN
ARG NEXT_PUBLIC_APP_BASE_URL_API
ARG NEXT_PUBLIC_APP_ENV
ENV NEXT_PUBLIC_APP_DOMAIN=$NEXT_PUBLIC_APP_DOMAIN
ENV NEXT_PUBLIC_APP_BASE_URL_API=$NEXT_PUBLIC_APP_BASE_URL_API
ENV NEXT_PUBLIC_APP_ENV=$NEXT_PUBLIC_APP_ENV

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# husky prepare script tidak relevan (dan .git tidak ada) di dalam image
RUN pnpm exec next build

# ---------------------------------------------------------------------------
# Runner — image final, hanya berisi hasil build.
# ---------------------------------------------------------------------------
FROM node:22-alpine AS runner
RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# server.js standalone tidak menyertakan public/ dan .next/static,
# jadi keduanya disalin manual.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD wget -qO- http://127.0.0.1:3000/ >/dev/null 2>&1 || exit 1

CMD ["node", "server.js"]

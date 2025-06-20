FROM oven/bun AS builder

WORKDIR /build

COPY astro.config.mjs ./
COPY package.json ./
COPY public ./public
COPY src ./src

RUN bun install && bun run build

FROM joseluisq/static-web-server:debian AS runtime

WORKDIR /data

COPY --from=builder /build/www ./www

EXPOSE 80/tcp

ENTRYPOINT [ "sh", "-c", "static-web-server -p 80 -d /data/www -g trace" ]
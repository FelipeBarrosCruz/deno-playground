FROM hayd/alpine-deno:1.0.1

USER deno

WORKDIR /app

ADD . .

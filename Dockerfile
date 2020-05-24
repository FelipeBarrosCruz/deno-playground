FROM hayd/alpine-deno:1.0.1

USER deno

WORKDIR /app

ADD . .

CMD [ "run", "--allow-net", "index.ts" ]
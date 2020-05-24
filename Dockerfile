FROM hayd/alpine-deno:1.0.1 AS base

USER deno

WORKDIR /usr/app

COPY . .

# development
FROM hayd/alpine-deno:1.0.1 AS development

RUN apk add --update yarn

WORKDIR /usr/app

COPY --from=base /usr/app .

RUN yarn install

ENTRYPOINT [ "yarn" ]

CMD ["dev"]

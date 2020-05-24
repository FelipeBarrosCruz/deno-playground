import server from "./http/server.ts";
import router from "./http/router.ts";
import { createMiddleware } from "./http/middleware.ts";
import { ServerRequest } from "https://deno.land/std@0.53.0/http/server.ts";

createMiddleware("*", "/favicon.ico", (request: ServerRequest) => {
  return request.respond({ body: "" });
});

createMiddleware("GET", "/", (request: ServerRequest) => {
  return request.respond({ body: "GET - Hello world" });
});

createMiddleware("POST", "/", (request: ServerRequest) => {
  return request.respond({ body: "POST- Hello world" });
});

await router(server);

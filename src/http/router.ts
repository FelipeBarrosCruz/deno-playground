import {
  Server,
  ServerRequest,
} from "https://deno.land/std@0.53.0/http/server.ts";
import { getAllMiddlewares, Middleware } from "./middleware.ts";

interface Store {
  middlewares: null | Array<Middleware>;
}

const store: Store = {
  middlewares: null,
};

const resolve = (request: ServerRequest) => {
  if (!store.middlewares) {
    store.middlewares = getAllMiddlewares();
  }

  const middleware = store.middlewares.find((middleware: Middleware) => (
    new RegExp(`^${middleware.route}$`).test(request.url) &&
    ( 
      middleware.method == "*" ||
      middleware.method == request.method
    )
  ));

  if (!middleware) {
    return request.respond({ status: 404, body: "Not found" });
  }

  return middleware.action(request);
};

const router = async (server: Server) => {
  for await (const request of server) {
    resolve(request);
  }
};

export default router;

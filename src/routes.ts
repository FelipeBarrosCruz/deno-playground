import { createMiddleware } from "./http/middleware.ts";
import { Request } from "./http/request.ts";
import * as ConversionService from "./services/conversion.ts";

createMiddleware("*", "/favicon.ico", (request: Request) => {
  return request.respond({ body: "" });
});

createMiddleware("GET", "/", async (request: Request) => {
  return request.respond({ body: "Hello world" });
});

createMiddleware("GET", "/conversion", async (request: Request) => {
  const query: any = request.query;
  const response = await ConversionService.convert(
    query.value,
    query.from,
    query.to,
  );
  return request.respond({ body: JSON.stringify(response) });
});

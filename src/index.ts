import server from "./http/server.ts";
import logger from "./logger/index.ts";

for await (const request of server) {
  logger.info("Request received");
  request.respond({ body: "Hello World" });
}


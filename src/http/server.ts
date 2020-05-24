import { serve } from "https://deno.land/std@0.53.0/http/server.ts";
import config from "../config/index.ts";
import logger from "../logger/index.ts";

const { APP_PORT } = config;

logger.info(`Deno HTTP Server Running on port ${APP_PORT}`)

export default serve({
  port: Number(APP_PORT),
});

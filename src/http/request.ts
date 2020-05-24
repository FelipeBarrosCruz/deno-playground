import { ServerRequest } from "https://deno.land/std@0.53.0/http/server.ts";

export interface Request extends ServerRequest {
  query?: {
    [key: string]: any;
  };
}

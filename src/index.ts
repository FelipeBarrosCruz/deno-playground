import server from "./http/server.ts";
import router from "./http/router.ts";
import "./routes.ts";

await router(server);

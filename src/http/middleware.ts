export interface Middleware {
  method: string;
  route: string;
  action: Function;
}

const middlewareStore: Array<Middleware> = [];

export const createMiddleware = (
  method: string,
  route: string,
  action: Function,
) => {
  middlewareStore.push({ method, route, action });
};

export const getAllMiddlewares = (): Array<Middleware> => middlewareStore;

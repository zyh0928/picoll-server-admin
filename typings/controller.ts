import { Middleware } from "koa";

export interface Template {
  model: string;
  routers: Router[];
}

export interface Router {
  method: string;
  path: string;
  unchecked?: boolean;
  action: Middleware;
}

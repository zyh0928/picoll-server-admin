import KoaRouter from "koa-router";
import interceptor from "./interceptor";
import userAuth from "./user-auth";
import { configService } from "@/config";

const list: KoaRouter[] = [];

list.push(
  new KoaRouter().get(
    "/env",
    async (ctx): Promise<void> => {
      ctx.body = process.env.NODE_ENV;
    }
  )
);

const controllers = [userAuth];

controllers.forEach(({ model, routers }): void => {
  const router = new KoaRouter({
    prefix: `${configService.baseUrl}${model}/`
  });

  routers.forEach(({ method, path, unchecked, action }): void => {
    router[method](path, interceptor(unchecked), action);
  });

  list.push(router);
});

export default list;

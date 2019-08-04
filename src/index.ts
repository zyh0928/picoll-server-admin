import "reflect-metadata";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import controller from "./controller";
import cors from "@koa/cors";
import { configService, configDatabase } from "./config";
import { createConnection } from "typeorm";

createConnection(configDatabase)
  .then(
    async (): Promise<void> => {
      const app = new Koa();

      app.use(
        cors({
          origin: "https://admin.wjbzg.com",
          maxAge: 86400 * 30
        })
      );

      app.use(bodyParser());

      // logger
      app.use(
        async (ctx, next): Promise<void> => {
          const start = Date.now();
          await next();
          const ms = Date.now() - start;
          // eslint-disable-next-line no-console
          console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
        }
      );

      controller.forEach((router): void => {
        app.use(router.routes()).use(router.allowedMethods());
      });

      app.listen(configService.port);
      // eslint-disable-next-line no-console
      console.log("Service is running on port", configService.port);

      return;
    }
  )
  .catch((error): void =>
    // eslint-disable-next-line no-console
    console.log("TypeORM connection error:", error)
  );

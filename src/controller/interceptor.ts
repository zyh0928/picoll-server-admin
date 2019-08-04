import { Middleware } from "koa";

const interceptor = (unchecked: boolean): Middleware => async (
  ctx,
  next
): Promise<void> => {
  if (unchecked) {
    await next();
    return;
  }

  // TODO: handle verify user auth
  // eslint-disable-next-line no-console
  console.log("call interceptor:", ctx.originalUrl);

  await next();
};

export default interceptor;

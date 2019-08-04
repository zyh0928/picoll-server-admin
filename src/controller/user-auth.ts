import UserAuth from "@/model/user-auth";
import { Controller } from "typings";
import { getRepository } from "typeorm";

const userAuthController: Controller.Template = {
  model: "user-auth",
  routers: [
    {
      method: "get",
      path: "list",
      action: async (ctx): Promise<void> => {
        const userAuthRepository = getRepository(UserAuth);
        const result = await userAuthRepository.find({ cache: !0 });

        ctx.body = { result };
      }
    },

    {
      method: "get",
      path: ":id",
      action: async (ctx): Promise<void> => {
        const userAuthRepository = getRepository(UserAuth);
        const result = await userAuthRepository.findOne(ctx.params.id, {
          cache: 1000
        });

        ctx.body = { result };
      }
    }
  ]
};

export default userAuthController;

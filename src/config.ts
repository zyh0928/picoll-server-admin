import UserAuth from "@/model/user-auth";
import dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";

const { NODE_ENV = "production" } = process.env;

dotenv.config({ path: `.env.${NODE_ENV}.local` });
dotenv.config({ path: `.env.${NODE_ENV}` });
dotenv.config({ path: ".env.local" });
dotenv.config();

const { env } = process;

const configService = {
  baseUrl: env.SERVICE_BASE_URL || "/",
  port: env.SERVICE_PORT || 3000
};

/**
 * @see TypeORM FAQ https://typeorm.io/#/faq
 */
const configDatabase: ConnectionOptions = {
  type: "mysql",
  host: env.DB_HOST || "localhost",
  port: Number(env.DB_PORT) || 3306,
  username: env.DB_USERNAME || "root",
  password: env.DB_PASSWORD || "123456",
  database: env.DB_DATABASE || "database",
  connectTimeout: Number(env.DB_CONNECT_TIMEOUT) || 10000,
  acquireTimeout: Number(env.DB_ACQUIRE_TIMEOUT) || 10000,
  synchronize: env.DB_SYNCHRONIZE === "!0" || !0,
  entities: [UserAuth],
  cache: !0
};

export { configService, configDatabase };

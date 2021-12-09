import "dotenv/config";
import path from "path";
import { ConnectionOptions } from "typeorm";
// import { PROD } from "./constant";

export const ormConfig: ConnectionOptions = {
  type: "mongodb",
  url: process.env.MONGODB_URL,
  useNewUrlParser: true,
  useUnifiedTopology:true,
  entities: [
    path.join(__dirname, "./entity/**/*.ts"),
    path.join(__dirname, "./entity/**/*.js"),
  ],
  migrations: [
    path.join(__dirname, "./migration/**/*.js"),
    path.join(__dirname, "./migration/**/*.ts"),
  ],
  synchronize: true,
//   logging: !PROD,
  logging: true,
};

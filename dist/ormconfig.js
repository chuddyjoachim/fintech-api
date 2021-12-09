"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfig = void 0;
require("dotenv/config");
const path_1 = __importDefault(require("path"));
// import { PROD } from "./constant";
exports.ormConfig = {
    type: "mongodb",
    url: process.env.MONGODB_URL,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: [
        path_1.default.join(__dirname, "./entity/**/*.ts"),
        path_1.default.join(__dirname, "./entity/**/*.js"),
    ],
    migrations: [
        path_1.default.join(__dirname, "./migration/**/*.js"),
        path_1.default.join(__dirname, "./migration/**/*.ts"),
    ],
    synchronize: true,
    //   logging: !PROD,
    logging: true,
};

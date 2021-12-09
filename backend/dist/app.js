"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (_, res) => {
    res.send("hello world");
});
app.use("/users", user_routes_1.default);
app.post("/create", (req, res) => {
    console.log(req.body);
    res.send("hello world222");
});
exports.default = app;

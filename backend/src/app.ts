import express, { Request, Response } from "express";
import "reflect-metadata";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json())

app.get("/", (_, res) => {
  res.send("hello world");
});

app.use("/users", userRoutes);

app.post("/create", (req, res) => {
  console.log(req.body);
  res.send("hello world222");
});

export default app;

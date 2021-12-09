import express from "express";
import "reflect-metadata";

const app = express();

app.get("/", (_, res) => {
  res.send("hello world");
});

export default app;

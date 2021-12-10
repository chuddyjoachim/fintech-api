import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../services/auth.service";

export const auth = (
  req: Request & { payload?: { userId: string } },
  res: Response,
  next: NextFunction
) => {
  const auhtorization = req.headers["authorization"];

  if (!auhtorization) {
    throw new Error("not authenticated");
  }
  //   console.log(auhtorization);

  try {
    const token = auhtorization?.split(" ")[1];

    const payload = verifyToken(token);
    req.payload = payload as any;
    // console.log(payload);
    // payload ? (req.payload = payload as any) : "";
  } catch (err) {
    throw new Error("not authenticated");
  }

  next();
};

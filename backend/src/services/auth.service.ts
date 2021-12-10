import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";

export const getHashedPassword = async (plainPassword: string) => {
  return await argon2.hash(plainPassword);
};

export const createToken = (userId: string) => {
  return jwt.sign({ userId: userId }, secret, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};

export const verifyPassword = async (
  hashPassword: string,
  plainPassword: string
) => {
  return await argon2.verify(hashPassword, plainPassword);
};

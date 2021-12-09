import { Request, Response } from "express";
import { getHashedPassword } from "../services/auth.service";
import {
  createUserService,
  getAllUsers,
  getUserByEmail,
} from "../services/user.service";

// create user controller
export const createUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = req.body.user;

  const hashedPassword = await getHashedPassword(user.password);

  //   check if user exist in database
  const ExistingUser = await getUserByEmail(user.email);

  if (ExistingUser) {
    return res.status(400).json({ msg: "user already exist" });
  }
  const newUser = await createUserService({
    ...user,
    password: hashedPassword,
  });
  return res.status(200).json({ newUser });
};

export const getAllUser = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  let userProperty;
  if (users) {
    userProperty = users.map((user) => ({
      id: user.id,
      email: user.email,
      username: user.name,
    }));
  }
  return res.json(userProperty);
};

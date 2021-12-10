import { Request, Response } from "express";
import { PROD } from "../constant";
import {
  createToken,
  getHashedPassword,
  verifyPassword,
  verifyToken,
} from "../services/auth.service";
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
  return res
    .status(200)
    .json({ token: createToken(newUser.id as unknown as string) });
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

// create user controller
export const loginUsers = async (req: Request, res: Response) => {
  const user = req.body.user;

  //   check if user exist in database
  const ExistingUser = await getUserByEmail(user.email);

  if (!ExistingUser) {
    return res.status(400).json({ msg: "user does not exist" });
  }
  if (ExistingUser) {
    console.log(ExistingUser);

    const hashedPassword = ExistingUser.password;
    const pass = await verifyPassword(hashedPassword, user.password);

    if (!pass) {
      return res.status(400).json({ msg: "invalid password" });
    } else {
      // res.cookie("mif", createToken(ExistingUser.id as unknown as string), {
      //   maxAge: 1000 * 60 * 60 * 60, // * 24 * 7 * 12
      //   httpOnly: true,
      //   sameSite: "lax",
      //   secure: PROD,
      // });
      return res
        .status(200)
        .json({ token: createToken(ExistingUser.id as unknown as string) });
    }
  }
};

export const isUser = async (
  req: Request & { payload?: { userId: any } },
  res: Response
) => {
  let payload = (await req.payload) as any;
  if(!payload){
    return res.json({msg: "unauthorized user"})
  }
  console.log(payload);

  res.json({ payload: payload });
};

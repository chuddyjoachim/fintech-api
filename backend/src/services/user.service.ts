import { getMongoRepository } from "typeorm";
import { User } from "../entity/User";

export const getUserByEmail = async (email: string) => {
  const user = getMongoRepository(User).findOne({ email: email });
  return user;
};

export const getUserById = async (id: any) => {
  const user = getMongoRepository(User).findOne({ id: id });
  return user;
};

export const createUserService = async (user: User) => {
  const newUser = getMongoRepository(User).create(user);

  return await getMongoRepository(User).save(newUser);
};

export const getAllUsers = async () => {
  const users = await getMongoRepository(User)
    .find()
    .catch((err) => {
      console.log(err);
    });
  return users;
};

import * as argon2 from "argon2";

export const getHashedPassword = async (plainPassword: string) => {
  return await argon2.hash(plainPassword);
};

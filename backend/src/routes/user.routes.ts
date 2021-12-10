import { Router } from "express";
// import { auth } from "../middleware/auth";

const router = Router();

import {
  getAllUser,
  createUsers,
  isUser,
  loginUsers
} from "../controllers/user.controller";
import { auth } from "../middleware/auth";

(async () => {
  router.get("/", getAllUser);
  router.post("/register", createUsers);
  router.post("/login", loginUsers);
  router.post("/me",auth, isUser);
})();

export default router;

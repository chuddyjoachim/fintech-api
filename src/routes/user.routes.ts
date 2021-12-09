import { Router } from "express";
// import { auth } from "../middleware/auth";

const router = Router();

import { getAllUser, createUsers } from "../controllers/user.controller";

(async () => {
  router.get("/", getAllUser);
  router.post("/register", createUsers);
})();

export default router;

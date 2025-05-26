import express from "express";
import {
  changeUserTeam,
  getUserInfo,
  registerNewUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/registernew", registerNewUser);
userRouter.get("/getuserinfo/:userUniqueID", getUserInfo);
userRouter.post("/changeuserteam/:userUniqueId", changeUserTeam);

export default userRouter;

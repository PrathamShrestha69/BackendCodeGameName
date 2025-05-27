import express from "express";
import {
  getUserInfo,
  registerNewUser,
  setUserTeamAndRole,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/registernew", registerNewUser);
userRouter.get("/getuserinfo/:userUniqueID", getUserInfo);
userRouter.post("/changeuserteamandrole/:userUniqueId", setUserTeamAndRole);

export default userRouter;

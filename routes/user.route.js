import express from "express";
import {
  changeUserCurrentRoom,
  getUserInfo,
  registerNewUser,
  setUserTeamAndRole,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/registernew", registerNewUser);
userRouter.get("/getuserinfo/:userUniqueID", getUserInfo);
userRouter.patch("/changeuserteamandrole/:userUniqueId", setUserTeamAndRole);
userRouter.patch("/changecurrentroom/:userUniqueId", changeUserCurrentRoom);

export default userRouter;

import express from "express";
import { getUsers, registerNewUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/registernew", registerNewUser);
userRouter.get("/getusers", getUsers);

export default userRouter;

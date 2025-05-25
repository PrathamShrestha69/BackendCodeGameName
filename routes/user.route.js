import express from "express";

const userRouter = express.Router();

userRouter.get("/getuser", (req, res) => {
  res.status(200).send("okay accepted");
});

export default userRouter;

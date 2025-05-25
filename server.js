import express from "express";
import userRouter from "./routes/user.route.js";
import connectDB from "./lib/connectDB.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

app.listen("3000", () => {
  connectDB();
  console.log("Listening at server 3000");
});

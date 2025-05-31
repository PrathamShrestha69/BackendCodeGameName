import express from "express";
import userRouter from "./routes/user.route.js";
import connectDB from "./lib/connectDB.js";
import cors from "cors";
import socketConfig from "./lib/SocketConfig.js";
import { createServer } from "http";
import gameRouter from "./routes/game.route.js";

import cardRouter from "./routes/card.route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/games", gameRouter);
app.use("/card", cardRouter);

const httpServer = createServer(app);
socketConfig(httpServer); //For socket

httpServer.listen("3000", () => {
  connectDB();
  console.log("Listening at server 3000");
});

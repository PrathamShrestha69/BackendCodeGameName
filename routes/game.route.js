import express from "express";
import {
  changeRoomDetails,
  createNewRoom,
  getRoomDetails,
} from "../controllers/game.controller.js";

const gameRouter = express.Router();

gameRouter.post("/:roomname", createNewRoom);
gameRouter.get("/:roomname", getRoomDetails);
gameRouter.patch("/:roomname", changeRoomDetails);

export default gameRouter;

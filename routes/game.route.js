import express from "express";
import {
  changeRoomDetails,
  createNewRoom,
  getRoomDetails,
} from "../controllers/game.controller.js";

const gameRouter = express.Router();

gameRouter.post("/:roomname", createNewRoom);
gameRouter.patch("/:roomname", changeRoomDetails);
gameRouter.get("/:roomname", getRoomDetails);

export default gameRouter;

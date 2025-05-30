import express from "express";
import { getCard } from "../controllers/card.controller.js";

const cardRouter = express.Router();

cardRouter.post("/getCard", getCard);

export default cardRouter;

import { Schema } from "mongoose";
import mongoose from "mongoose";

const cardSchema = new Schema({
  cardColour: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  cardText: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Card", cardSchema);

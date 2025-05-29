import { Schema } from "mongoose";
import mongoose from "mongoose";

const gameSchema = new Schema({
  roomCode: {
    type: String,
    required: true,
    unique: true,
  },

  adminUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

export default mongoose.model("Game", gameSchema);

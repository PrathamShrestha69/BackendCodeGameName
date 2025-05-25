import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
  displayName: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("User", userSchema);

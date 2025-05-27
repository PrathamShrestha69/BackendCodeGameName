import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
  displayName: {
    type: String,
    required: true,
    unique: true,
  },
  userUniqueID: {
    type: String,
    required: true,
    unique: true,
  },
  isUserAdmin: {
    type: Boolean,
    default: false,
  },
  userTeam: {
    type: String,
    default: undefined,
  },
  userRole: {
    type: String,
    default: undefined,
  },
});

export default mongoose.model("User", userSchema);

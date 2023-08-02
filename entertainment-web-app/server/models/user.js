import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String },
  bookmarks: [String],
});

const User = mongoose.model("User", userSchema);
export { User };

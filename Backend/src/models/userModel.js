import mongoose from "mongoose";

const UserScehma = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserScehma);
export default User;

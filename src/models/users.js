import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  role: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Users", userSchema);

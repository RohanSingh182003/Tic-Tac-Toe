const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    password: String,
    isAdmin: {
      type: String,
      default: false,
    },
    token: String,
  },
  { timestamps: true }
);

const userModel = new mongoose.model("User", UserSchema);
userModel.createIndexes(); // use to throw error if created duplicate entry

module.exports = userModel;

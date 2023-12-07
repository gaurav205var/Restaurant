const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email Address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
    role:{type:String,default:'customer'}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

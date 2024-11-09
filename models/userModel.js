// models/userModel.js

const mongoose = require("mongoose");

// Định nghĩa schema cho người dùng với trường 'role'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "User", "Guest"],
    default: "User",
  },
});

// Tạo model từ schema
const User = mongoose.model("User", userSchema);

module.exports = User;

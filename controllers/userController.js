// controllers/userController.js

const User = require("../models/userModel");

// Hiển thị form thêm người dùng
const showForm = (req, res) => {
  res.render("index");
};

// Xử lý thêm người dùng
const addUser = async (req, res) => {
  const { name, email, role } = req.body;
  try {
    if (name && email) {
      const newUser = new User({ name, email, role });
      await newUser.save();
    }
    res.redirect("/users");
  } catch (error) {
    console.error("Lỗi khi thêm người dùng:", error);
    res.status(500).send("Đã xảy ra lỗi!");
  }
};

// Hiển thị danh sách người dùng
const showUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render("users", { users });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách người dùng:", error);
    res.status(500).send("Đã xảy ra lỗi!");
  }
};

// Hiển thị form chỉnh sửa người dùng
const editUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    res.render("editUser", { user });
  } catch (error) {
    console.error("Lỗi khi tìm người dùng:", error);
    res.status(500).send("Đã xảy ra lỗi!");
  }
};

// Xử lý cập nhật người dùng
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, role } = req.body;
  try {
    await User.findByIdAndUpdate(userId, { name, email, role });
    res.redirect("/users");
  } catch (error) {
    console.error("Lỗi khi cập nhật người dùng:", error);
    res.status(500).send("Đã xảy ra lỗi!");
  }
};

// Xóa người dùng
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await User.findByIdAndDelete(userId);
    res.redirect("/users");
  } catch (error) {
    console.error("Lỗi khi xóa người dùng:", error);
    res.status(500).send("Đã xảy ra lỗi!");
  }
};

module.exports = { showForm, addUser, showUsers, editUser, updateUser, deleteUser };

// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.showForm);
router.post("/add-user", userController.addUser);
router.get("/users", userController.showUsers);
router.get("/edit/:id", userController.editUser);
router.post("/update/:id", userController.updateUser);
router.get("/delete/:id", userController.deleteUser);

module.exports = router;

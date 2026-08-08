const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Register a new user
router.post("/register", authController.registerUser);

//POST
router.post("/login", authController.loginUser);

module.exports = router;

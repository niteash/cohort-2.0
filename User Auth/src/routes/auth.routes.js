const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  // Handle user registration
  const { name, email, password } = req.body;

  const isUserExits = await userModel.findOne({ email });

  if (isUserExits) {
    return res.status(409).json({ message: "User already exists" });
  }

  const newUser = new userModel({
    name,
    email,
    password: crypto.createHash("sha256").update(password).digest("hex"),
  });

  await newUser.save();

  const token = jwt.sign(
    {
      id: newUser._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
});

router.get("/get-me", async (req, res) => {
  // Handle fetching user information

  const token = req.cookies.token;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findById(decoded.id);

  res.json({
    name: user.name,
    email: user.email,
  });

  console.log(decoded);
});

router.post("/login", async (req, res) => {
  // Handle user login
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isPasswordValid =
    crypto.createHash("sha256").update(password).digest("hex") ===
    user.password;

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );
  res.cookie("token", token);

  res.json({
    message: "Login successful",
    user: {
      name: user.name,
      email: user.email,
    },
  });
});
module.exports = router;

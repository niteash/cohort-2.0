const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/user.js");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

authRouter.post("/register", async (req, res) => {
  const { email, name, password } = req.body;
  const isUserAlreadyExist = await userModel.findOne({ email });

  if (isUserAlreadyExist) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashedPassword = await crypto
    .createHash("md5")
    .update(password)
    .digest("hex");

  const User = await userModel.create({
    email,
    name,
    password: hashedPassword,
  });

  const token = jwt.sign(
    { id: User._id, email: User.email },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res
    .status(201)
    .json({ message: "User registered successfully", user: User, token });
});

authRouter.post("/protected", (req, res) => {
  console.log(req.cookies);

  res.status(200).json({ message: "Protected route accessed successfully" });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({ message: "User not found, please register first" });
  }

  const isPasswordMatched =
    user.password === crypto.createHash("md5").update(password).digest("hex");

  if (!isPasswordMatched) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("jwt_token", token);
  res.status(200).json({ message: "Login successful", token });
});
module.exports = authRouter;

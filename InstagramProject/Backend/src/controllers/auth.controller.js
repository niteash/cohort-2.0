const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");

//register

async function registerUser(req, res) {
  const { email, username, password, bio, profile_image } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserAlreadyExists) {
    return res
      .status(409)
      .json(
        { message: "User already exists" } +
          (isUserAlreadyExists.email = email
            ? "Email already exists"
            : "Username already exists"),
      );
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profile_image,
  });

  // - user data // - data unique

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "User registered successfully...",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profile_image: user.profile_image,
    },
  });
}

// login

async function loginUser(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "Login successful",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profile_image: user.profile_image,
    },
  });
}

module.exports = {
  registerUser,
  loginUser,
};

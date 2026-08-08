const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const { IdentifyUser } = require("../middleware/auth.middleware");
//@route POST/api/users/follow/:userId
//@description Follow/user
//@access private

userRouter.post(
  "/follow/:username",
  IdentifyUser,
  userController.followUserController,
);
userRouter.post(
  "/unfollow/:username",
  IdentifyUser,
  userController.unfollowUserController,
);
module.exports = userRouter;

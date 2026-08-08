const followModel = require("../models/follow.models");
const userModel = require("../models/user.models");

async function followUserController(req, res) {
  const followerUserName = req.user.username; // the user who is following
  const followeeUserName = req.params.username; //the user to be followed

  if (followerUserName === followeeUserName) {
    return res.status(400).json({
      message: "You cannot follow yourself",
    });
  }

  const isFolloweeExists = await userModel.findOne({
    username: followeeUserName,
  });

  if (!isFolloweeExists) {
    return res.status(404).json({
      message: "User you are trying to follow does not exist",
    });
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUserName,
    followee: followeeUserName,
  });

  if (isAlreadyFollowing) {
    return res.status(400).json({
      message: "You are already following " + followeeUserName,
    });
  }

  const followRecord = await followModel.create({
    follower: followerUserName,
    followee: followeeUserName,
  });

  res.status(201).json({
    message: "You are now following " + followeeUserName,
    followRecord,
  });
}

async function unfollowUserController(req, res) {
  const followerUserName = req.user.username; // the user who is unfollowing
  const followeeUserName = req.params.username; //the user to be unfollowed

  const isUserFollowing = await userModel.findOne({
    follower: followerUserName,
    followee: followeeUserName,
  });

  if (!isUserFollowing) {
    return res.status(400).json({
      message: "You are not following " + followeeUserName,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: "You have unfollowed " + followeeUserName,
  });
}

module.exports = {
  followUserController,
  unfollowUserController,
};

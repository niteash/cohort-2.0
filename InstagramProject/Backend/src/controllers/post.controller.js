const postModel = require("../models/post.models");
const ImageKit = require("@imagekit/nodejs/index.js");
const { toFile } = require("@imagekit/nodejs/index.js");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/like.models");
const followModel = require("../models/follow.models");

const imageKit = ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
});

async function CreatePostController(req, res) {
  console.log(req.body, req.file);

  console.log(decoded);

  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: req.file.originalname,
    folder: "insta-clone-posts",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

async function GetAllPostsController(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not provided, unauthorized access",
    });
  }
  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "User not authorised, invalid token",
    });
  }

  const userId = req.user.id;
  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
}

async function GetPostDetailsController(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not provided, unauthorized access",
    });
  }

  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "User not authorised, invalid token",
    });
  }

  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const validUser = post.user.toString() === userId;

  if (!validUser) {
    return res.status(403).json({
      message: "User not authorised to view this post",
    });
  }

  return res.status(200).json({
    message: "Post details fetched successfully",
    post,
  });
}

async function LikePostController(req, res) {
  const username = req.user.username;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const like = await likeModel.create({
    post: postId,
    user: username,
  });

  res.status(201).json({
    message: "Post liked successfully",
    like,
  });
}

async function FollowUserController(req, res) {
  const follower = req.user.username;
  const followee = req.params.username;

  if (follower === followee) {
    return res.status(400).json({
      message: "You cannot follow yourself",
    });
  }

  const existingFollow = await followModel.findOne({
    follower,
    followee,
  });

  if (existingFollow) {
    return res.status(400).json({
      message: `Follow request already exists with status: ${existingFollow.status}`,
    });
  }

  const follow = await followModel.create({
    follower,
    followee,
    status: "pending",
  });

  return res.status(201).json({
    message: "Follow request sent",
    follow,
  });
}

async function AcceptFollowController(req, res) {
  const follower = req.params.username;
  const followee = req.user.username;

  const follow = await followModel.findOne({
    follower,
    followee,
    status: "pending",
  });

  if (!follow) {
    return res.status(404).json({
      message: "Follow request not found",
    });
  }

  follow.status = "accepted";

  await follow.save();

  return res.status(200).json({
    message: "Follow request accepted",
    follow,
  });
}

async function RejectFollowController(req, res) {
  const follower = req.params.username;
  const followee = req.user.username;

  const follow = await followModel.findOne({
    follower,
    followee,
    status: "pending",
  });

  if (!follow) {
    return res.status(404).json({
      message: "Follow request not found",
    });
  }

  follow.status = "rejected";

  await follow.save();

  return res.status(200).json({
    message: "Follow request rejected",
    follow,
  });
}
module.exports = {
  CreatePostController,
  GetAllPostsController,
  GetPostDetailsController,
  LikePostController,
  FollowUserController,
  AcceptFollowController,
  RejectFollowController,
};

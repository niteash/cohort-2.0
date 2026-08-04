const postModel = require("../models/post.models");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

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

module.exports = {
  CreatePostController,
  GetAllPostsController,
  GetPostDetailsController,
};

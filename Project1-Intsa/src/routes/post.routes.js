const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middleware/auth.middleware");

//post - /api/post/ [protected]
// req.body = {caption, image-file}

// POST  {/apipost/}
postRouter.post(
  "/",
  upload.single("image"),
  identifyUser.IdentifyUser,
  postController.CreatePostController,
);

// GET {/api/post/} - protected

postRouter.get(
  "/",
  identifyUser.IdentifyUser,
  postController.GetAllPostsController,
);

//GET {api/post/details/:postId} - return a detail about specific post with the id, also check whether the post belong to the user that the request is coming from

postRouter.get(
  "/details/:postId",
  identifyUser.IdentifyUser,
  postController.GetPostDetailsController,
);

module.exports = postRouter;

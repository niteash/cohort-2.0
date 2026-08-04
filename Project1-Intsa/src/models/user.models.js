const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
  },

  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    unique: [true, "Password already exists"],
    required: [true, "Password is required"],
  },
  bio: String,
  profile_image: {
    type: String,
    default:
      "https://ik.imagekit.io/d6afxy9ecj/default-image.jpg?updatedAt=1781417000718",
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;

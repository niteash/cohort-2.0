const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: {
    type: String,
    unique: [true, "Email already exists"],
  },
});

const usermodel = mongoose.model("Users", userSchema);

module.exports = usermodel;

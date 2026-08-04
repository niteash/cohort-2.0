const mongoose = require("mongoose");

function ConnectToDB() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = ConnectToDB;

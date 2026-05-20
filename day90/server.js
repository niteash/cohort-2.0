//sever starting
const app = require("./src/app");

//database connect
const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://nicki:0qduYTYCMeA6g23j@cluster0.xf9lhcz.mongodb.net/day90",
    )
    .then(() => {
      console.log("Connected to Database");
    });
}

connectToDB();

app.listen("3000", (req, res) => {
  console.log("Server is listening on port 3000");
});

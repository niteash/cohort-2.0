const ConnectToDB = require("./src/config/database");
const app = require("./src/app");
require("dotenv").config();

ConnectToDB();

app.listen(3000, () => {
  console.log(`Server is running on port { 3000 }`);
});

const express = require("express");
const app = express();
const authRouter = require("./routes/auth.routes");
const cookies = require("cookie-parser");

app.use(express.json());
app.use(cookies());

//api/auth/register
app.use("/api/auth", authRouter);

module.exports = app;

const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Importing routes
const AuthRouter = require("./Routes/AuthRouter");

app.use("/auth", AuthRouter);

module.exports = app;

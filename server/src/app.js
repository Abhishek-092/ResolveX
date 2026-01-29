const express = require("express");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

// AUTH ROUTES
app.use("/auth", authRoutes);

module.exports = app;

const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("frontend"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/login.html"));
});

app.get("/panel", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/panel.html"));
});

module.exports = app;

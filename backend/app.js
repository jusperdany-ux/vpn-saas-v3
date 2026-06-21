const express = require("express");
require("./services/telegramBot");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ONLINE",
    project: "VPN SAAS V3 REAL"
  });
});

app.get("/panel/:id", (req, res) => {
  res.json({
    panelId: req.params.id,
    status: "active",
    message: "Real panel loaded"
  });
});

module.exports = app;
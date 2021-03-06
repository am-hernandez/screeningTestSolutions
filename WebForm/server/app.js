const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api", require("./api"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./path/to/index.html"));
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;

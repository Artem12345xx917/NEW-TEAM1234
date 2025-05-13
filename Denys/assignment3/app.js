const express = require("express");
const path = require("path");
const app = express();
const rootDir = require("./util/path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

app.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "additional.html"));
});

app.listen(3000);

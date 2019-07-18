const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  console.log("test");
});

module.exports = server;

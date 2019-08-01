const express = require("express");
const server = express();

const RecipesRouter = require('./recipes/recipes-router');

server.use(express.json());
server.use('/api/recipes', RecipesRouter);

module.exports = server;

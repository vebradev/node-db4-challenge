const express = require('express');
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.send("test");
  } catch (error) {
    res.status(500).json({
      error: 'Failed to load recipes.'
    });
  }
});

module.exports = router;
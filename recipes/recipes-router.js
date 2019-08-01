const express = require("express");
const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({
      error: "Failed to load recipes."
    });
  }
});

router.get("/:id/shoppingList", async (req, res) => {
  try {
    const shoppingList = await Recipes.getShoppingList(req.params.id);
    if (shoppingList.length) {
      res.json(shoppingList);
    } else {
      res.json({
        error: "Such recipe does not exist."
      });
    }
  } catch (error) {
    res.status(500).json({
      error: `Failed to load shopping list.`
    });
  }
});

router.get("/:id/instructions", async (req, res) => {
  try {
    const instructions = await Recipes.getInstructions(req.params.id);
    if (instructions.length) {
      res.json(instructions);
    } else {
      res.json({
        error: "Such recipe does not exist."
      });
    }
  } catch (error) {
    res.status(500).json({
      error: `Failed to load steps for recipe.`
    });
  }
});

module.exports = router;

const knex = require('knex');
const db = knex(require('../knexfile').development);

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db
    .select("recipes.name", "ingredients.name", "combined_recipe.quantity")
    .from("combined_recipe")
    .leftJoin("recipes", "combined_recipe.recipe_id", "recipes.id")
    .leftJoin("ingredients", "combined_recipe.ingredient_id", "ingredients.id")
    .where("combined_recipe.recipe_id", recipe_id);
}

function getInstructions(recipe_id) {
  return db
    .select("steps.step_number", "steps.step")
    .from("recipes")
    .leftJoin("steps", "recipes.id", "steps.recipe_id")
    .where("recipes.id", recipe_id);
}
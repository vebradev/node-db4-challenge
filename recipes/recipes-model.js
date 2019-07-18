const knex = require('knex');
const db = knex(require('../knexfile').development);

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return "recipes";
}

function getShoppingList(recipe_id) {

}

function getInstructions(recipe_id) {
  
}
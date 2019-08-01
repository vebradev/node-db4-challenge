exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("combined_recipe")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("combined_recipe").insert([
        { id: 1, recipe_id: "1", ingredient_id: "1", quantity: 5 },
        { id: 2, recipe_id: "1", ingredient_id: "2", quantity: 2 },
        { id: 3, recipe_id: "1", ingredient_id: "3", quantity: 4 },
        { id: 4, recipe_id: "2", ingredient_id: "4", quantity: 3 },
        { id: 5, recipe_id: "2", ingredient_id: "5", quantity: 8 },
        { id: 6, recipe_id: "2", ingredient_id: "6", quantity: 10 },
        { id: 7, recipe_id: "3", ingredient_id: "7", quantity: 1 },
        { id: 8, recipe_id: "3", ingredient_id: "8", quantity: 2 },
        { id: 9, recipe_id: "3", ingredient_id: "9", quantity: 14 }
      ]);
    });
};

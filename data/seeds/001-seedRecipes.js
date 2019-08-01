exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Pasta" },
        { id: 2, name: "Pizza" },
        { id: 3, name: "Pancakes" }
      ]);
    });
};

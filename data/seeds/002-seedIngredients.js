exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "Pasta" },
        { id: 2, name: "Tomatoes" },
        { id: 3, name: "Cheese" },
        { id: 4, name: "Salami" },
        { id: 5, name: "Dough" },
        { id: 6, name: "Flour" },
        { id: 7, name: "Olives" },
        { id: 8, name: "Eggs" },
        { id: 9, name: "Milk" },
        { id: 10, name: "Cottage Cheese" },
        { id: 11, name: "Strawberry Jam" }
      ]);
    });
};

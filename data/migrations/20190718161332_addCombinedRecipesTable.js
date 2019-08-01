
exports.up = function(knex) {
  return knex.schema
    .createTable('combined_recipe', table => {
      table.increments();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients');
      table
        .float('quantity')
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('combined_recipe');
};

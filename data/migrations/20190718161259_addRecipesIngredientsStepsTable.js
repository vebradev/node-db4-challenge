
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
      table.increments();
      table.string('name', 128).notNullable();
    })
    .createTable('ingredients', table => {
      table.increments();
      table.string('name', 128).notNullable();
    })
    .createTable('steps', table => {
      table.increments();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
      table.integer('step_number')
        .unsigned()
        .notNullable();
      table.text('step', 128)
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps');
};

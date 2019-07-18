
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: '1', step_number: '1', step: 'Step 1 for recipe 1'},
        {id: 2, recipe_id: '1', step_number: '2', step: 'Step 2 for recipe 1'},
        {id: 3, recipe_id: '2', step_number: '3', step: 'Step 1 for recipe 2'},
        {id: 4, recipe_id: '2', step_number: '4', step: 'Step 2 for recipe 2'},
        {id: 5, recipe_id: '3', step_number: '5', step: 'Step 1 for recipe 3'},
        {id: 6, recipe_id: '3', step_number: '6', step: 'Step 2 for recipe 3'},
        {id: 7, recipe_id: '1', step_number: '7', step: 'Step 3 for recipe 1'},
        {id: 8, recipe_id: '2', step_number: '8', step: 'Step 3 for recipe 2'},
        {id: 9, recipe_id: '1', step_number: '9', step: 'Step 4 for recipe 1'},
        {id: 10, recipe_id: '3', step_number: '9', step: 'Step 3 for recipe 3'}
      ]);
    });
};

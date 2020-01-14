// Appends the foreign key (id of places) to the Activities table
exports.up = function(knex) {
  return knex.schema.table('activities', function(table) {
      table.integer('p_id').unsigned().index().references('placeid').inTable('places')
  })
};

// Drops the foreign key (id of places) column from the Activities table
exports.down = function(knex) {
  return knex.schema.table('activities', function(table) {
    table.dropColumn('p_id');
  })
};

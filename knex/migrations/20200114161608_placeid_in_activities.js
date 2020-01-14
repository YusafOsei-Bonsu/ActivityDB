
exports.up = function(knex) {
  return knex.schema.table('activities', function(table) {
      table.integer('p_id').unsigned().index().references('placeid').inTable('places')
  })
};

exports.down = function(knex) {
  return knex.schema.table('activities', function(table) {
    table.dropColumn('p_id');
  })
};

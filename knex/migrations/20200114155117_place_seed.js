
exports.up = function(knex) {
    return knex.schema.createTable('places', function(table) {
        table.increments('placeid');
        table.string('placename').notNullable();
        table.string('streetaddress').notNullable();
        table.string('county').notNullable();
        table.string('postcode').notNullable();
    })
  };
  
  // Delete places table
  exports.down = function(knex) {
    return knex.schema.dropTable('places');
  };
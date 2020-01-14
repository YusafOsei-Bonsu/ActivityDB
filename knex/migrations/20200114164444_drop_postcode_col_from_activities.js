// Deletes the postcode column from the Activities table
exports.up = function(knex, Promise) {
    return knex.schema.table('activities', function(table) {
        table.dropColumn('postcode');
    });
};

// Creates the postcode column in the Activities table
exports.down = function(knex, Promise) {
    return knex.schema.table('activities', function(table) {
        table.string('postcode');
    });  
};

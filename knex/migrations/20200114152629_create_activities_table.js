// Create the Activities table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('activities', function(table) {
        table.increments("activityid");
        table.string("name").notNullable();
        table.integer("fun").notNullable();
        table.integer("price").notNullable();
        table.string("postcode").notNullable();
    });
};

// Remove the Activities table
exports.down = function(knex, Promise) {
    return knex.schema.dropTable("activities");
};

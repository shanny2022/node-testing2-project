exports.up = function (knex) {
  return knex.schema.createTable('table_name', function (table) {
    table.increments('id');
    // Add other columns here
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('table_name');
};

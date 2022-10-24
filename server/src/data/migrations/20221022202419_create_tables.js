const TableName = {
  RECIPES: 'recipes',
  RECIPE_CONTENTS: 'recipe_contents',
};

const ColumnName = {
  BODY: 'body',
  CREATED_AT: 'created_at',
  ID: 'id',
  UPDATED_AT: 'updated_at',
  NAME: 'name',
  DESCRIPTION: 'description'
};

export async function up(knex) {
  await knex.schema.createTable(TableName.RECIPES, table => {
    table.uuid(ColumnName.ID).primary();
    table.datetime(ColumnName.CREATED_AT, { useTz: false }).notNullable().defaultTo(knex.fn.now());
    table.datetime(ColumnName.UPDATED_AT, { useTz: false }).notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(TableName.RECIPE_CONTENTS, table => {
    table.uuid(ColumnName.ID).primary();
    table.string(ColumnName.NAME).notNullable();
    table.text(ColumnName.DESCRIPTION).notNullable();
    table.datetime(ColumnName.CREATED_AT, { useTz: false }).notNullable().defaultTo(knex.fn.now());
    table.datetime(ColumnName.UPDATED_AT, { useTz: false }).notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists(TableName.RECIPES);
  await knex.schema.dropTableIfExists(TableName.RECIPE_CONTENTS);
}

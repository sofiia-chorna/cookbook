const TableName = {
  RECIPES: 'recipes',
  RECIPE_CONTENTS: 'recipe_contents'
};

const ColumnName = {
  ID: 'id',
  RECIPE_ID: 'recipe_id',
};

const RelationRule = {
  CASCADE: 'CASCADE',
  SET_NULL: 'SET NULL'
};

export async function up(knex) {
  await knex.schema.alterTable(TableName.RECIPE_CONTENTS, table => {
    table
      .uuid(ColumnName.RECIPE_ID)
      .references(ColumnName.ID)
      .inTable(TableName.RECIPES)
      .onUpdate(RelationRule.CASCADE)
      .onDelete(RelationRule.SET_NULL);
  });
}

export async function down(knex) {
  await knex.schema.alterTable(TableName.RECIPE_CONTENTS, table => {
    table.dropColumn(ColumnName.RECIPE_ID);
  });
}

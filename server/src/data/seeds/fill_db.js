import { recipeContentsSeed } from '../seed-data/recipe-contents-seed.js';
import { recipesSeed } from '../seed-data/recipes-seed.js';

const TableName = {
  RECIPES: 'recipes',
  RECIPE_CONTENTS: 'recipe_contents',
};

const ColumnName = {
  ID: 'id',
  USER_ID: 'user_id',
  RECIPE_ID: 'recipe_id'
};

export async function seed(knex) {
  try {
    await knex.transaction(async trx => {
      // Add recipe
      const recipes = await trx(TableName.RECIPES)
        .insert(recipesSeed)
        .returning('*');

      // Add recipe contents
      const recipeContentsMappedSeed = recipeContentsSeed.map((recipeContent, index) => ({
        ...recipeContent,
        [ColumnName.RECIPE_ID]: recipes[index].id,
      }));
      await trx(TableName.RECIPE_CONTENTS).insert(recipeContentsMappedSeed);

    });
  } catch (error) {
    console.log(`Seeding error: ${error}`);
  }
}

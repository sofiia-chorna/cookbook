import { Abstract } from '../abstract/abstract.repository.js';
import { RecipeContent } from '../../models/models.js';

class Recipe extends Abstract {
  constructor({ recipeModel }) {
    super(recipeModel);
  }

  getRecipes() {
    return this.model.knex().raw(
      `SELECT recipes.id, recipes.created_at, rc1.name, rc1.description FROM recipes JOIN recipe_contents rc1 ON (recipes.id = rc1.recipe_id) LEFT OUTER JOIN recipe_contents rc2 ON (recipes.id = rc2.recipe_id AND (rc1.created_at < rc2.created_at OR (rc1.created_at = rc2.created_at AND rc1.id < rc2.id))) WHERE rc2.id IS NULL ORDER BY recipes.created_at DESC`
    );
  }

  getRecipeById(id) {
    // select * from recipes
    // left join recipe_contents content
    // on content.recipe_id = recipes.id
    // where recipes.id = '00840bfe-5304-41f9-9fc4-f8f441aba141'

    return this.model
      .query()
      .select(
        'recipes.created_at',
        'recipes.updated_at',
        'recipes.id',
        'recipe_contents.name',
        'recipe_contents.description'
      )
      .leftJoin('recipe_contents', 'recipe_contents.recipe_id', 'recipes.id')
      .where('recipes.id', id)
      .first();
  }

  async createRecipe(recipe) {
    const newRecipe = await this.create({});
    RecipeContent.query().insert({
      ...recipe,
      recipeId: newRecipe.id,
    });
    return newRecipe;
  }
}

export { Recipe };

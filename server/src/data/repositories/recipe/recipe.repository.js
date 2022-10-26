import { Abstract } from '../abstract/abstract.repository.js';

class Recipe extends Abstract {
  constructor({ recipeModel }) {
    super(recipeModel);
  }

  getRecipes() {
    return this.model.knex().raw(
      'SELECT recipes.id, recipes.created_at, rc1.name, rc1.description FROM recipes ' +
      'JOIN recipe_contents rc1 ON (recipes.id = rc1.recipe_id) ' +
      'LEFT OUTER JOIN recipe_contents rc2 ON (recipes.id = rc2.recipe_id ' +
      'AND (rc1.created_at < rc2.created_at OR (rc1.created_at = rc2.created_at AND rc1.id < rc2.id))) ' +
      'WHERE rc2.id IS NULL ORDER BY recipes.created_at DESC'
    );
  }

  getRecipeById(id) {
    return this.model
      .query()
      .select(
        'recipes.created_at',
        'recipes.updated_at',
        'recipes.id',
        'name',
        'description'
      )
      .leftJoin('recipe_contents', 'recipe_contents.recipe_id', 'recipes.id')
      .orderBy('recipe_contents.updated_at', 'desc')
      .where('recipes.id', id)
      .first();
  }

  async createRecipe() {
    return await this.create({});
  }
}

export { Recipe };

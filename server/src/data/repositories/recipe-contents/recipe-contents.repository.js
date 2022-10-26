import { Abstract } from '../abstract/abstract.repository.js';

class RecipeContent extends Abstract {
  constructor({ recipeContentModel }) {
    super(recipeContentModel);
  }

  async createRecipeContent(payload) {
    return await this.create(payload);
  }

  getContentByRecipeId(id) {
    return this.model.query()
      .select('recipe_contents.*')
      .where('recipe_id', id);
  }
}

export { RecipeContent };

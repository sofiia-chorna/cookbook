import { Abstract } from '../abstract/abstract.repository.js';

class RecipeContent extends Abstract {
  constructor({ recipeContentModel }) {
    super(recipeContentModel);
  }

  async createRecipeContent(payload) {
    return await this.create(payload);
  }
}

export { RecipeContent };

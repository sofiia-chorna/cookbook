class Recipe {
  constructor({ recipeRepository }) {
    this._recipeRepository = recipeRepository;
  }

  async getRecipes(filter) {
    return await this._recipeRepository.getRecipes(filter);
  }

  getRecipeById(id) {
    return this._recipeRepository.getRecipeById(id);
  }

  create(recipe) {
    return this._recipeRepository.create({
      ...recipe
    });
  }
}

export { Recipe };

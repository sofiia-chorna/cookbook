class Recipe {
  constructor({ recipeRepository }) {
    this._recipeRepository = recipeRepository;
  }

  getRecipes(filter) {
    return this._recipeRepository.getRecipes(filter);
  }

  getRecipeById(id) {
    return this._recipeRepository.getRecipeById(id);
  }

  createRecipe(recipe) {
    return this._recipeRepository.createRecipe({
      ...recipe
    });
  }
}

export { Recipe };

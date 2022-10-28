class Recipe {
  constructor({ recipeRepository, recipeContentRepository }) {
    this._recipeRepository = recipeRepository;
    this._recipeContentRepository = recipeContentRepository;
  }

  getRecipes(filter) {
    return this._recipeRepository.getRecipes(filter);
  }

  getRecipeById(id) {
    return this._recipeRepository.getRecipeById(id);
  }

  async createRecipe(recipe) {
    const { id } = await this._recipeRepository.createRecipe({});
    await this._recipeContentRepository.createRecipeContent({
      ...recipe,
      recipeId: id
    });
    return this.getRecipeById(id);
  }

  async updateRecipe(id, recipe) {
    await this._recipeContentRepository.createRecipeContent({
      ...recipe,
      recipeId: id
    });
    return this.getRecipeById(id);
  }

  async getRecipeVersions(id) {
    return await this._recipeContentRepository.getContentByRecipeId(id);
  }

  async getRecipeVersion(id, versionId) {
    const recipe = await this._recipeRepository.getById(id);
    const content = await this._recipeContentRepository.getById(versionId);
    return content ? { ...recipe, name: content.name, description: content.description } : recipe;
  }
}

export { Recipe };

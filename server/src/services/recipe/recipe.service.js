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
    const recipe = await this._recipeRepository.getById(id);
    const contents = await this._recipeContentRepository.getContentByRecipeId(id);
    return contents.map(content => {
      return { ...content, ...recipe };
    });
  }

  getRecipeVersion(id, versionId) {
    const recipe = this._recipeRepository.getById(id);
    const content = this._recipeContentRepository.getById(versionId);
    return { ...content, ...recipe };
  }
}

export { Recipe };

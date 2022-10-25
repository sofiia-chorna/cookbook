import { recipe as recipeRepository } from '../data/repositories/repositories.js';
import { recipeContent as recipeContentRepository } from '../data/repositories/repositories.js';
import { Recipe } from './recipe/recipe.service.js';

const recipe = new Recipe({
  recipeRepository,
  recipeContentRepository
});

export { recipe };

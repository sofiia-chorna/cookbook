import { recipe as recipeRepository } from '../data/repositories/repositories.js';
import { Recipe } from './recipe/recipe.service.js';

const recipe = new Recipe({
  recipeRepository,
});

export { recipe };

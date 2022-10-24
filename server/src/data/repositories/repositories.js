import {
  Recipe as RecipeModel
} from '../models/models.js';
import { Recipe } from './recipe/recipe.repository.js';

const recipe = new Recipe({
  recipeModel: RecipeModel
});

export { recipe };

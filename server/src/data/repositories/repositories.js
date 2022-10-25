import {
  Recipe as RecipeModel,
  RecipeContent as RecipeContentModel
} from '../models/models.js';
import { Recipe } from './recipe/recipe.repository.js';
import { RecipeContent } from './recipe-contents/recipe-contents.repository.js';

const recipe = new Recipe({
  recipeModel: RecipeModel,
  recipeContentModel: RecipeContentModel
});

const recipeContent = new RecipeContent({
  recipeContentModel: RecipeContentModel
});

export { recipe, recipeContent };

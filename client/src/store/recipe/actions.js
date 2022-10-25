import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common.js';

const loadRecipes = createAsyncThunk(
  ActionType.SET_ALL_RECIPES,
  async (filters, { extra: { services } }) => {
    const recipes = await services.recipe.getAllRecipes(filters);
    return { recipes };
  }
);

const createRecipe = createAsyncThunk(
  ActionType.CREATE_RECIPE,
  async (recipe, { extra: { services } }) => {
    const { id } = await services.recipe.createRecipe(recipe);
    const newRecipe = await services.recipe.getRecipe(id);
    return { recipe: newRecipe };
  }
);

const updateRecipe = createAsyncThunk(
  ActionType.UPDATE_RECIPE,
  async (recipe, { extra: { services } }) => {
    const { id } = await services.recipe.updateRecipe(recipe);
    const updatedRecipe = await services.recipe.getRecipe(id);
    return { recipe: updatedRecipe };
  }
);

const toggleExpandedRecipe = createAsyncThunk(
  ActionType.SET_EXPANDED_RECIPE,
  async (recipeId, { extra: { services } }) => {
    const recipe = recipeId ? await services.recipe.getRecipe(recipeId) : undefined;
    return { recipe };
  }
);

export {
  loadRecipes,
  createRecipe,
  updateRecipe,
  toggleExpandedRecipe
};

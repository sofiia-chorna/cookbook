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

export {
  loadRecipes,
  createRecipe
};

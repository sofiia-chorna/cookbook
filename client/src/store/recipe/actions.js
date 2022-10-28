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
    const { id } = await services.recipe.updateRecipe(recipe.id, recipe);
    const updatedRecipe = await services.recipe.getRecipe(id);
    return { recipe: updatedRecipe };
  }
);

const loadRecipe = createAsyncThunk(
  ActionType.SET_CURRENT_RECIPE,
  async (recipeId, { extra: { services } }) => {
    const recipe = recipeId ? await services.recipe.getRecipe(recipeId) : null;
    return { recipe };
  }
);

const loadVersions = createAsyncThunk(
  ActionType.SET_RECIPE_VERSIONS,
  async (recipeId, { extra: { services } }) => {
    const recipes = recipeId ? await services.recipe.getRecipeVersions(recipeId) : null;
    return { recipes };
  }
);

const loadVersion = createAsyncThunk(
  ActionType.SET_RECIPE_VERSION,
  async ({ recipeId, versionId }, { extra: { services } }) => {
    const recipe = recipeId ? await services.recipe.getRecipeVersion(recipeId, versionId) : null;
    return { recipe };
  }
);

export {
  loadRecipes,
  loadRecipe,
  createRecipe,
  updateRecipe,
  loadVersions,
  loadVersion
};

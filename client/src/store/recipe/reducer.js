import { createReducer } from '@reduxjs/toolkit';
import {
  loadRecipes,
  createRecipe,
  updateRecipe,
  loadRecipe,
  loadVersions,
  loadVersion
} from './actions.js';

const initialState = {
  recipes: [],
  currentRecipe: null,
  versions: []
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(loadRecipes.fulfilled, (state, action) => {
    const { recipes } = action.payload;
    state.recipes = recipes;
  });
  builder.addCase(createRecipe.fulfilled, (state, action) => {
    const { recipe } = action.payload;
    state.recipes = [recipe, ...state.recipes];
  });
  builder.addCase(updateRecipe.fulfilled, (state, action) => {
    const { recipe } = action.payload;
    state.currentRecipe = recipe;
    state.recipes = state.recipes.map(oldRecipe => {
      return oldRecipe.id === recipe.id ? recipe : oldRecipe;
    });
  });
  builder.addCase(loadRecipe.fulfilled, (state, action) => {
    const { recipe } = action.payload;
    state.currentRecipe = recipe;
  });
  builder.addCase(loadRecipe.pending, state => {
    state.currentRecipe = null;
  });
  builder.addCase(loadVersions.fulfilled, (state, action) => {
    const { recipes } = action.payload;
    state.versions = recipes;
  });
  builder.addCase(loadVersion.fulfilled, (state, action) => {
    const { recipe } = action.payload;
    state.currentRecipe = recipe;
  });
});

export { reducer };

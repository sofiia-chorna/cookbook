import { createReducer } from '@reduxjs/toolkit';
import {
  loadRecipes,
  createRecipe,
  updateRecipe,
  toggleExpandedRecipe
} from './actions.js';

const initialState = {
  recipes: [],
  expandedRecipe: null
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
    state.recipes = [recipe, ...state.recipes];
  });
  builder.addCase(toggleExpandedRecipe.fulfilled, (state, action) => {
    const { recipe } = action.payload;
    state.expandedRecipe = recipe;
  });
});

export { reducer };

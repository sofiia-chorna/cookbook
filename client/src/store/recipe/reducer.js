import { createReducer } from '@reduxjs/toolkit';
import {
  loadRecipes,
  createRecipe
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
});

export { reducer };

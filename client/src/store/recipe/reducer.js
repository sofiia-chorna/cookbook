import { createReducer, isAnyOf } from '@reduxjs/toolkit';
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
    state.hasMorePosts = Boolean(recipes.length);
  });
  builder.addMatcher(
    isAnyOf(createRecipe.fulfilled),
    (state, action) => {
      const { recipe } = action.payload;
      console.log(recipe);
      state.recipes = [recipe, ...state.recipes];
    }
  );
});

export { reducer };

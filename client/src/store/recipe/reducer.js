import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import {
  loadRecipes,
  // loadMorePosts,
  // toggleExpandedPost,
  likePost,
  addComment,
  applyPost,
  createRecipe
} from './actions.js';

const initialState = {
  recipes: [],
  // Else
  posts: [],
  expandedPost: null,
  hasMorePosts: true
};

const reducer = createReducer(initialState, builder => {
  builder.addCase(loadRecipes.fulfilled, (state, action) => {
    const { recipes } = action.payload;
    state.recipes = recipes;
    state.hasMorePosts = Boolean(recipes.length);
  });
  builder.addMatcher(
    isAnyOf(applyPost.fulfilled, createRecipe.fulfilled),
    (state, action) => {
      const { recipe } = action.payload;
      state.recipes = [recipe, ...state.recipes];
    }
  );
  // Else
  // builder.addCase(loadMorePosts.pending, state => {
  //   state.hasMorePosts = null;
  // });
  // builder.addCase(loadMorePosts.fulfilled, (state, action) => {
  //   const { posts } = action.payload;
  //
  //   state.posts = state.posts.concat(posts);
  //   state.hasMorePosts = Boolean(posts.length);
  // });
  // builder.addCase(toggleExpandedPost.fulfilled, (state, action) => {
  //   const { post } = action.payload;
  //
  //   state.expandedPost = post;
  // });
  builder.addMatcher(
    isAnyOf(likePost.fulfilled, addComment.fulfilled),
    (state, action) => {
      const { posts, expandedPost } = action.payload;
      state.posts = posts;
      state.expandedPost = expandedPost;
    }
  );
});

export { reducer };

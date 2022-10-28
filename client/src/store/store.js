import { configureStore } from '@reduxjs/toolkit';
import { http, recipe } from 'services/services.js';
import { recipeReducer } from './root-reducer.js';

const store = configureStore({
  reducer: {
    recipes: recipeReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        services: {
          http,
          recipe
        }
      }
    }
  })
});

export { store };

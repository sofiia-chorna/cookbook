import { configureStore } from '@reduxjs/toolkit';
import { http, storage, recipe } from 'services/services.js';
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
          storage,
          recipe
        }
      }
    }
  })
});

export { store };

import { ENV } from 'common/enums/enums.js';
import { Http } from './http/http.service.js';
import { Storage } from './storage/storage.service.js';
import { Recipe } from './recipe/recipe.service.js';

const storage = new Storage({
  storage: localStorage
});

const http = new Http({
  storage
});

const recipe = new Recipe({
  apiPath: ENV.API_PATH,
  http
});

export { http, storage, recipe };

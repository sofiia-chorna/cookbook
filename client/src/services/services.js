import { ENV } from 'common/enums/enums.js';
import { Http } from './http/http.service.js';
import { Recipe } from './recipe/recipe.service.js';

const http = new Http();

const recipe = new Recipe({
  apiPath: ENV.API_PATH,
  http
});

export { http, recipe };

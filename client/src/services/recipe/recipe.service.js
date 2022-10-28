import {
  ApiPath,
  RecipesApiPath,
  HttpMethod,
  ContentType
} from 'common/enums/enums';
import { replaceIdParam, replaceRecipeIdParamAndVersionId } from 'helpers/helpers.js';

class Recipe {
  constructor({ apiPath, http }) {
    this._apiPath = apiPath;
    this._http = http;
  }

  getAllRecipes(filter) {
    return this._http.load(`${this._apiPath}${ApiPath.RECIPES}`, {
      method: HttpMethod.GET,
      query: filter
    });
  }

  getRecipe(id) {
    return this._http.load(`${this._apiPath}${ApiPath.RECIPES}${RecipesApiPath.ROOT}${id}`, {
      method: HttpMethod.GET
    });
  }

  createRecipe(payload) {
    return this._http.load(`${this._apiPath}${ApiPath.RECIPES}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload)
    });
  }

  updateRecipe(id, payload) {
    return this._http.load(`${this._apiPath}${ApiPath.RECIPES}${RecipesApiPath.ROOT}${id}`, {
      method: HttpMethod.PUT,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload)
    });
  }

  getRecipeVersions(id) {
    const recipeVersionsPath = replaceIdParam(RecipesApiPath.$ID_VERSIONS, id);
    return this._http.load(`${this._apiPath}${ApiPath.RECIPES}${recipeVersionsPath}`, {
      method: HttpMethod.GET
    });
  }

  getRecipeVersion(id, versionId) {
    const recipeIdPath = replaceRecipeIdParamAndVersionId(RecipesApiPath.$ID_$VERSION, id, versionId);
    return this._http.load(`${this._apiPath}${ApiPath.RECIPES}${recipeIdPath}`, {
      method: HttpMethod.GET
    });
  }
}

export { Recipe };

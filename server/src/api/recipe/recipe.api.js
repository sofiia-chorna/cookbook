import { RecipesApiPath, ControllerHook, HttpMethod } from '../../common/enums/enums.js';

const initRecipe = (fastify, opts, done) => {
  const { recipe: recipeService } = opts.services;
  fastify.route({
    method: HttpMethod.GET,
    url: RecipesApiPath.ROOT,
    [ControllerHook.HANDLER]: async req => {
      const { rows } = await recipeService.getRecipes(req.query);
      return rows;
    }
  });
  fastify.route({
    method: HttpMethod.GET,
    url: RecipesApiPath.$ID,
    [ControllerHook.HANDLER]: async req => {
      return await recipeService.getRecipeById(req.params.id);
    }
  });
  fastify.route({
    method: HttpMethod.GET,
    url: RecipesApiPath.$ID_VERSIONS,
    [ControllerHook.HANDLER]: async req => {
      return await recipeService.getRecipeVersions(req.params.id);
    }
  });
  fastify.route({
    method: HttpMethod.GET,
    url: RecipesApiPath.$ID_$VERSION,
    [ControllerHook.HANDLER]: async req => {
      return await recipeService.getRecipeVersion(req.params.id, req.params.versionId);
    }
  });
  fastify.route({
    method: HttpMethod.POST,
    url: RecipesApiPath.ROOT,
    [ControllerHook.HANDLER]: async req => {
      return await recipeService.createRecipe(req.body);
    }
  });
  fastify.route({
    method: HttpMethod.PUT,
    url: RecipesApiPath.$ID,
    [ControllerHook.HANDLER]: async req => {
      return await recipeService.updateRecipe(req.params.id, req.body);
    }
  });

  done();
};

export { initRecipe };

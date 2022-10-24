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
    [ControllerHook.HANDLER]: req => recipeService.getRecipeById(req.params.id)
  });
  fastify.route({
    method: HttpMethod.POST,
    url: RecipesApiPath.ROOT,
    [ControllerHook.HANDLER]: async req => {
      return await recipeService.create(req.user.id, req.body);
    }
  });

  done();
};

export { initRecipe };

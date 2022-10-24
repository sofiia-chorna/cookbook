import { ApiPath } from '../common/enums/enums.js';
import { initRecipe } from './recipe/recipe.api.js';

const initApi = (
  fastify,
  { services: { recipe } },
  done
) => {
  fastify.setValidatorCompiler(({ schema }) => {
    return data => schema.validate(data);
  });

  fastify.register(initRecipe, {
    services: { recipe },
    prefix: ApiPath.RECIPES
  });

  done();
};

export { initApi };

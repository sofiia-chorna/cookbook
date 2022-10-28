import { Model } from 'objection';
import { DbTableName } from '../../../common/enums/enums.js';
import { Abstract as AbstractModel } from '../abstract/abstract.model.js';
import { Recipe as RecipeModel } from '../recipe/recipe.model.js';

class RecipeContent extends AbstractModel {
  static get tableName() {
    return DbTableName.RECIPE_CONTENTS;
  }

  static get jsonSchema() {
    const baseSchema = super.jsonSchema;

    return {
      type: baseSchema.type,
      required: ['name', 'description', 'recipeId'],
      properties: {
        ...baseSchema.properties,
        name: { type: 'string' },
        description: { type: 'string' },
        recipeId: { type: ['string', 'null'] },
      }
    };
  }

  static get relationMappings() {
    return {
      recipe: {
        relation: Model.HasOneRelation,
        modelClass: RecipeModel,
        join: {
          from: `${DbTableName.RECIPE_CONTENTS}.recipeId`,
          to: `${DbTableName.RECIPES}.id`
        }
      },
    };
  }
}

export { RecipeContent };

import { Model } from 'objection';
import { DbTableName } from '../../../common/enums/enums.js';
import { Abstract as AbstractModel } from '../abstract/abstract.model.js';
import { RecipeContent as RecipeContentModel } from '../recipe-content/recipe-content.model.js';

class Recipe extends AbstractModel {
  static get tableName() {
    return DbTableName.RECIPES;
  }

  static get jsonSchema() {
    const baseSchema = super.jsonSchema;

    return {
      type: baseSchema.type,
      properties: {
        ...baseSchema.properties,
      }
    };
  }

  static get relationMappings() {
    return {
      recipeContents: {
        relation: Model.HasManyRelation,
        modelClass: RecipeContentModel,
        join: {
          from: `${DbTableName.RECIPES}.id`,
          to: `${DbTableName.RECIPE_CONTENTS}.recipeId`
        }
      },
    };
  }
}

export { Recipe };

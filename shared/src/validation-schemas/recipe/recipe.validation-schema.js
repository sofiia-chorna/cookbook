import Joi from 'joi';
import {
  RecipeValidationMessage,
  RecipeValidationRule,
  RecipePayloadKey
} from '../../common/enums/enums.js';

const recipe = Joi.object({
  [RecipePayloadKey.NAME]: Joi.string()
    .trim()
    .min(RecipeValidationRule.NAME_MIN_LENGTH)
    .max(RecipeValidationRule.NAME_MAX_LENGTH)
    .required()
    .messages({
      'string.min': RecipeValidationMessage.NAME_MIN_LENGTH,
      'string.max': RecipeValidationMessage.NAME_MAX_LENGTH,
      'string.empty': RecipeValidationMessage.NAME_REQUIRE
    }),
  [RecipePayloadKey.DESCRIPTION]: Joi.string()
    .trim()
    .min(RecipeValidationRule.DESCRIPTION_MIN_LENGTH)
    .max(RecipeValidationRule.DESCRIPTION_MAX_LENGTH)
    .required()
    .messages({
      'string.min': RecipeValidationMessage.DESCRIPTION_MIN_LENGTH,
      'string.max': RecipeValidationMessage.DESCRIPTION_MAX_LENGTH,
      'string.empty': RecipeValidationMessage.DESCRIPTION_REQUIRE
    })
});

export { recipe };

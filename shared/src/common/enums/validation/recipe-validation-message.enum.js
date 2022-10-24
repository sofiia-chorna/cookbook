import { RecipeValidationRule } from './recipe-validation-rule.enum.js';

const RecipeValidationMessage = {
  NAME_REQUIRE: 'Title is required',
  NAME_MIN_LENGTH: `Title must be at least ${RecipeValidationRule.NAME_MIN_LENGTH} characters long`,
  NAME_MAX_LENGTH: `Title must be at most ${RecipeValidationRule.NAME_MAX_LENGTH} characters long`,
  DESCRIPTION_REQUIRE: 'Description is required',
  DESCRIPTION_MIN_LENGTH: `Description must be at least ${RecipeValidationRule.DESCRIPTION_MIN_LENGTH} characters long`,
  DESCRIPTION_MAX_LENGTH: `Description must be at most ${RecipeValidationRule.DESCRIPTION_MAX_LENGTH} characters long`
};

export { RecipeValidationMessage };

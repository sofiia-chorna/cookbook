import PropTypes from 'prop-types';

const recipeErrorType = PropTypes.exact({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
});

export { recipeErrorType };

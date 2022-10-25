import PropTypes from 'prop-types';
import { recipeType } from 'common/prop-types/prop-types';
import { getAllowedClasses } from 'helpers/helpers';
import { CreateButton, Item } from '../components.js';
import styles from './styles.module.scss';

export const Container = ({ recipes, onItemClick, onCreate }) => (
  <div className={getAllowedClasses(styles.recipeContainer, 'py-2 w-100')}>
    <CreateButton onClick={onCreate} />
    {recipes.map(recipe => <Item key={recipe.id} recipe={recipe} onClick={onItemClick} />)}
  </div>
);

Container.propTypes = {
  recipes: PropTypes.arrayOf(recipeType).isRequired,
  onItemClick: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired
};

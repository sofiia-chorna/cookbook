import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { recipeType } from 'common/prop-types/prop-types';
import { getAllowedClasses } from 'helpers/helpers';
import styles from './styles.module.scss';

export const Item = ({ recipe, onClick }) => (
  <Card className="rounded border-0 p-0">
    <Button
      variant="light"
      className={getAllowedClasses(styles.button, 'h-100')}
      onClick={() => onClick(recipe.id)}
    >
      <Card.Body className="d-flex align-items-center justify-content-center">
        <Card.Title className={getAllowedClasses(styles.h5, 'text-break')}>{recipe.name}</Card.Title>
      </Card.Body>
    </Button>
  </Card>
);

Item.propTypes = {
  recipe: recipeType.isRequired,
  onClick: PropTypes.func.isRequired
};

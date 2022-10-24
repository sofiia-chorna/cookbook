import PropTypes from 'prop-types';
import { recipeType } from 'common/prop-types/prop-types';
import { getAllowedClasses } from 'helpers/helpers';
import { Button, Card } from 'react-bootstrap';
import styles from './styles.module.scss';

// {/*<Card.Title className="text-break">{recipe.name}</Card.Title>*/}

export const Item = ({ recipe, onClick }) => (
  <Card className="rounded border-0 p-0">
    <Button
      variant="light"
      className="bg-white h-100"
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

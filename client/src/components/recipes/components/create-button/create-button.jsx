import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { getAllowedClasses } from 'helpers/helpers';
import styles from './styles.module.scss';

export const CreateButton = ({ onClick }) => (
  <Card className={getAllowedClasses(styles.button, 'rounded border-0 p-0')}>
    <Button
      variant="light"
      className={getAllowedClasses(
        styles.createButton,
        'd-flex align-items-center justify-content-center h-100'
      )}
      onClick={onClick}
    >
      <span className="bi bi-plus-lg" />
    </Button>
  </Card>
);

CreateButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

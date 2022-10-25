import PropTypes from 'prop-types';
import { IconName, IconSize } from 'common/enums/enums.js';
import { Icon } from 'components/common/common.js';
import styles from './styles.module.scss';

const IconButton = ({ iconName, label, onClick, size }) => (
  <button className={styles.iconButton} type="button" onClick={onClick}>
    <Icon name={iconName} size={size} />
    {label}
  </button>
);

IconButton.propTypes = {
  iconName: PropTypes.oneOf(Object.values(IconName)).isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(Object.values(IconSize))
};

IconButton.defaultProps = {
  label: '',
  size: IconSize.LARGE
};

export { IconButton };

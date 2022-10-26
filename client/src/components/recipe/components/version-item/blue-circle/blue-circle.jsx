import { getAllowedClasses } from 'helpers/dom/dom';
import styles from './styles.module.scss';

export const BlueCircle = () => (
  <span className={getAllowedClasses(styles.dot, 'd-flex')}></span>
);

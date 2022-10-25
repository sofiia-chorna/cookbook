import PropTypes from 'prop-types';
import { locationType } from 'common/prop-types/prop-types';

const PublicRoute = ({ component: Component, ...rest }) => {
  return <Component {...rest} />;
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: locationType
};

PublicRoute.defaultProps = {
  location: undefined
};

export { PublicRoute };

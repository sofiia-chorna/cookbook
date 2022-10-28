import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as React from 'react';
import PropTypes from 'prop-types';
import { AppRoute } from 'common/enums/enums.js';
import { getAllowedClasses, replaceRecipeIdParamAndVersionId } from 'helpers/helpers';
import styles from './styles.module.scss';

export const VersionItem = ({
  onClick,
  children,
  id,
  versionId,
  recipeId
}) => {
  return (
    <Dropdown.Item
      id={id}
      as={Link}
      to={(replaceRecipeIdParamAndVersionId(
        AppRoute.RECIPE_VERSION,
        recipeId || '',
        versionId || ''
      ))}
      className={getAllowedClasses(styles.versionItem, 'text-secondary')}
      onClick={onClick}
    >
      {children}
    </Dropdown.Item>
  );
};

VersionItem.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.elementType),
  versionId: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired
};

VersionItem.defaultProps = {
  onClick: undefined,
  children: React.createElement('div')
};

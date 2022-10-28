import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as React from 'react';
import PropTypes from 'prop-types';
import { AppRoute } from 'common/enums/enums.js';
import { getAllowedClasses, replaceIdParam, replaceRecipeIdParamAndVersionId } from 'helpers/helpers';
import styles from './styles.module.scss';

export const VersionItem = ({
  onClick,
  children,
  id,
  versionId,
  recipeId,
  latest
}) => {
    <Dropdown.Item
      id={id}
      as={Link}
      to={
        latest
          ? (replaceIdParam(AppRoute.RECIPE, recipeId || ''))
          : (replaceRecipeIdParamAndVersionId(
            AppRoute.RECIPE_VERSION,
            recipeId || '',
            versionId || ''
          ))
      }
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
  recipeId: PropTypes.string.isRequired,
  latest: PropTypes.bool
};

VersionItem.defaultProps = {
  onClick: undefined,
  children: React.createElement('div'),
  latest: false
};

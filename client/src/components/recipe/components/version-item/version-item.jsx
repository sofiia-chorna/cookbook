import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { AppRoute } from 'common/enums/enums.js';
import {
  getAllowedClasses,
  replaceIdParam,
  replaceRecipeIdParamAndVersionId,
} from 'helpers/helpers';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export const VersionItem = ({
  onClick,
  children,
  id,
  versionId,
  pageId,
  latest,
}) => (
  <Dropdown.Item
    id={id}
    as={Link}
    to={
      latest
        ? (replaceIdParam(AppRoute.RECIPE, pageId || ''))
        : (replaceRecipeIdParamAndVersionId(
            AppRoute.RECIPE_PREVIOUS_VERSION,
            pageId || '',
            versionId || '',
          ))
    }
    className={getAllowedClasses(styles.versionItem, 'text-secondary')}
    onClick={onClick}
  >
    {children}
  </Dropdown.Item>
);

VersionItem.propTypes = {
  id: PropTypes.string.isRequired,
  versionId: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.elementType),
  latest: PropTypes.bool
};

VersionItem.defaultProps = {
  onClick: undefined,
  children: React.createElement('div'),
  latest: false
};

import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import * as React from 'react';
import NavLink from 'react-bootstrap/NavLink';
import { recipeType } from 'common/prop-types/prop-types.js';
import { getAllowedClasses, getFormattedVersionDate } from 'helpers/helpers';
import { VersionItem } from '../version-item/version-item.jsx';
import { BlueCircle } from '../version-item/blue-circle/blue-circle.jsx';
import styles from './styles.module.scss';

const VersionDropdown = ({ versions, onChange, currentVersion, recipeId }) => {
  const latestVersion = versions[0];
  const versionButtonValue = !currentVersion || false
    ? 'Latest'
    : getFormattedVersionDate(
      versions ? currentVersion?.createdAt : new Date().toString()
    );

  return (
    <Dropdown as={NavLink} align="end" className={getAllowedClasses(styles.container, 'd-inline-flex sm')}>
      <Dropdown.Toggle
        as={NavLink}
        className={getAllowedClasses('sm text-secondary')}
      >
        <span className="h2 me-2">
          Version:
          {' '}
          {versionButtonValue}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={getAllowedClasses(styles.dropDownMenu)}>
        {versions && currentVersion ? (
          versions.map(version => (
            <div className="d-flex" key={version.id}>
              <VersionItem
                id={version.id}
                versionId={currentVersion.id}
                key={version.id}
                recipeId={recipeId}
                latest={version.createdAt === latestVersion?.createdAt}
                onClick={() => onChange(version)}
              >
                {version.createdAt === latestVersion?.createdAt ? (
                  <div className="d-flex justify-content-between">
                    {' '}
                    {currentVersion.id === version.id || !currentVersion ? (
                      <BlueCircle />
                    ) : null}
                    <div className={getAllowedClasses(styles.dropDownItem, 'pt-2')}>
                      {getFormattedVersionDate(version.createdAt)}
                      {' '}
                      (Latest)
                    </div>
                  </div>
                ) : (
                  <div className="d-flex">
                    {currentVersion.id === version.id ? <BlueCircle /> : null}
                    <div className={getAllowedClasses(styles.dropDownItem, 'pt-2')}>
                      {getFormattedVersionDate(version.createdAt)}
                    </div>
                  </div>
                )}
              </VersionItem>
            </div>
          ))
        ) : (
          <p className="h3"> no versions </p>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

VersionDropdown.propTypes = {
  versions: PropTypes.arrayOf(recipeType),
  onChange: PropTypes.func,
  currentVersion: recipeType,
  recipeId: PropTypes.string
};

VersionDropdown.defaultProps = {
  versions: null,
  currentVersion: null,
  onChange: undefined,
  recipeId: null
};

export { VersionDropdown };

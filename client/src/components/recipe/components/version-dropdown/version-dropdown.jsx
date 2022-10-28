import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { useParams } from 'hooks/hooks.js';
import * as React from 'react';
import NavLink from 'react-bootstrap/NavLink';
import { recipeType } from 'common/prop-types/prop-types.js';
import { getAllowedClasses, getFormattedVersionDate } from 'helpers/helpers';
import { VersionItem } from '../version-item/version-item.jsx';
import { BlueCircle } from '../version-item/blue-circle/blue-circle.jsx';
import styles from './styles.module.scss';

const VersionDropdown = ({ versions, onChange }) => {
  const latestVersion = versions[0];
  const { id, versionId } = useParams();
  const currentVersion = versions.find(version => version.id === versionId);
  const versionButtonValue = latestVersion?.id === currentVersion?.id
    ? 'Latest'
    : getFormattedVersionDate(currentVersion?.createdAt);

  return (
    <Dropdown as={NavLink} align="end" className={getAllowedClasses(styles.container, 'd-inline-flex sm')}>
      <Dropdown.Toggle
        as={NavLink}
        className="sm text-secondary"
      >
        <span className={getAllowedClasses(styles.dropDownTitle, 'h2 me-2')}>
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
                versionId={versionId}
                key={version.id}
                recipeId={id}
                onClick={() => onChange(version)}
              >
                {version.createdAt === latestVersion?.createdAt ? (
                  <div className="d-flex justify-content-between">
                    {' '}
                    {versionId === version.id || !versionId ? (
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
                    {versionId === version.id ? <BlueCircle /> : null}
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
  onChange: PropTypes.func
};

VersionDropdown.defaultProps = {
  versions: null,
  onChange: undefined
};

export { VersionDropdown };

import { Dropdown } from 'react-bootstrap';
import { VersionItem } from '../version-item/version-item';
import { BlueCircle } from '../version-item/blue-circle/blue-circle.jsx';
import { useAppSelector, useParams } from 'hooks/hooks';
import NavLink from 'react-bootstrap/NavLink';
import {
  getAllowedClasses,
  getFormattedVersionDate,
} from 'helpers/helpers';
import styles from './styles.module.scss';
import { recipeType } from 'common/prop-types/prop-types.js';

const VersionDropdown = ({ currContent }) => {
  const pageId = useParams().id;

  const pageContents = useAppSelector(
    (state) => state.pages.currentPage?.pageContents,
  );
  const { currentPage } = useAppSelector((state) => state.pages);

  const currVersionId = useParams().versionId;

  const latestVersion = currentPage?.pageContents[0];

  const pageContentsCopy = JSON.parse(JSON.stringify(pageContents),);

  const versionButtonValue =
    !currVersionId || currentPage?.pageContents[0]?.id === currVersionId
      ? 'Latest'
      : getFormattedVersionDate(
          currContent ? currContent?.createdAt : new Date().toString(),
        );
  return (
    <Dropdown as={NavLink} align="end" className="d-inline-flex sm">
      <Dropdown.Toggle
        as={NavLink}
        className={getAllowedClasses('sm text-secondary')}
      >
        <span className="me-2">Version: {versionButtonValue}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={getAllowedClasses(styles.dropDownMenu)}>
        {pageContentsCopy ? (
          pageContentsCopy.map(({ id, createdAt }) => (
            <div className="d-flex" key={id}>
              <VersionItem
                id={id}
                versionId={id}
                key={id}
                pageId={pageId}
                latest={createdAt === latestVersion?.createdAt}
              >
                {createdAt === latestVersion?.createdAt ? (
                  <div className="d-flex">
                    {' '}
                    {currVersionId === id || !currVersionId ? (
                      <BlueCircle />
                    ) : null}
                    {getFormattedVersionDate(createdAt)} (Latest)
                  </div>
                ) : (
                  <div className="d-flex">
                    {currVersionId === id ? <BlueCircle /> : null}
                    {getFormattedVersionDate(createdAt)}
                  </div>
                )}
              </VersionItem>
            </div>
          ))
        ) : (
          <p className="fs-6"> no versions </p>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

VersionDropdown.propTypes = {
  currContent: recipeType
};

VersionDropdown.defaultProps = {
  currContent: null
};

export { VersionDropdown };

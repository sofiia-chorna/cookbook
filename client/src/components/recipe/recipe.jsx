import * as React from 'react';
import { Container as BootstrapContainer, Button } from 'react-bootstrap';
import { recipeActionCreator } from 'store/actions.js';
import { useSelector, useNavigate, useState, useDispatch, useEffect } from 'hooks/hooks.js';
import { getAllowedClasses, replaceRecipeIdParamAndVersionId } from 'helpers/helpers';
import { AppRoute } from 'common/enums/enums.js';
import { Spinner, RecipeModal } from 'components/common/common.js';
import { VersionDropdown } from './components/components.js';
import styles from './styles.module.scss';

const Recipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentRecipe, versions } = useSelector(state => ({
    currentRecipe: state.recipes.currentRecipe,
    versions: state.recipes.versions
  }));

  const sortedVersions = [...versions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const [currentVersion, setCurrentVersion] = React.useState(sortedVersions[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!currentRecipe) {
      navigate(AppRoute.ROOT);
    } else {
      dispatch(
        recipeActionCreator.loadVersions(currentRecipe.id)
      );
    }
  }, [currentRecipe]);

  useEffect(() => {
    if (currentRecipe && currentVersion) {
      const url = replaceRecipeIdParamAndVersionId(AppRoute.RECIPE_VERSION, currentRecipe.id, currentVersion.id);
      navigate(url);
    }
  }, [currentVersion]);

  const handleUpdateCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const handleVersionChange = version => {
    setCurrentVersion(version);
  };

  const handleUpdateConfirm = data => {
    dispatch(
      recipeActionCreator.updateRecipe({
        id: currentRecipe.id,
        name: data.name,
        description: data.description
      })
    );
    dispatch(
      recipeActionCreator.loadVersions(currentRecipe.id)
    );
  };

  const handleBack = () => {
    navigate(AppRoute.ROOT);
  };

  return currentRecipe && (
    <div className={getAllowedClasses(styles.rootContainer, 'align-items-center vh-100')}>
      <BootstrapContainer className={getAllowedClasses(styles.mainContainer, 'rounded text-center')}>
        {currentRecipe ? (
          <div className={getAllowedClasses(styles.container, 'h-100')}>
            <h1 className={getAllowedClasses(styles.title, 'pt-5 mb-5')}>{currentRecipe.name}</h1>
            <hr className={getAllowedClasses(styles.halfRule, 'half-rule')} />
            <div className="pt-4 justify-content-between d-flex">
              <div>
                <Button
                  variant="secondary"
                  onClick={handleBack}
                  className={getAllowedClasses(styles.secondary, 'me-2')}
                >
                  Back
                </Button>
                <Button
                  variant="success"
                  onClick={handleEdit}
                  className={getAllowedClasses(styles.success, 'me-2')}
                >
                  Edit
                </Button>
              </div>
              <VersionDropdown
                versions={sortedVersions}
                currentVersion={currentVersion}
                onChange={handleVersionChange}
                recipeId={currentRecipe.id}
              />
            </div>
            <div className={getAllowedClasses(styles.outerDiv, 'mt-5 h-100 border')}>
              <h2 className={getAllowedClasses(styles.description)}>{currentRecipe.description}</h2>
            </div>
          </div>
        ) : <Spinner height="12rem" width="12rem" />}
        <RecipeModal
          title="Edit a recipe"
          showModal={isModalVisible}
          onModalClose={handleUpdateCancel}
          handleFunction={handleUpdateConfirm}
          recipe={currentRecipe}
        />
      </BootstrapContainer>
    </div>
  );
};

export { Recipe };

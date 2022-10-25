import { Container as BootstrapContainer, Button } from 'react-bootstrap';
import { recipeActionCreator } from 'store/actions.js';
import { useSelector, useNavigate, useState, useDispatch } from 'hooks/hooks.js';
import { AppRoute } from 'common/enums/enums.js';
import { Spinner, RecipeModal } from 'components/common/common.js';
import { getAllowedClasses } from 'helpers/helpers.js';
import styles from './styles.module.scss';

const Recipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentRecipe } = useSelector(state => ({
    currentRecipe: state.recipes.currentRecipe
  }));

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleUpdateCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const handleUpdateConfirm = data => {
    dispatch(
      recipeActionCreator.updateRecipe({
        id: currentRecipe.id,
        name: data.name,
        description: data.description
      })
    );
  };

  const handleBack = () => {
    navigate(AppRoute.ROOT);
  };

  return (
    <div className="bg-light position-relative align-items-center pt-5 vh-100">
      <BootstrapContainer className="position-relative align-items-center text-center pt-5 h-75 bg-white">
        {currentRecipe ? (
          <>
            <h1 className="h1 mb-5">{currentRecipe.name}</h1>
            <hr className={getAllowedClasses(styles.halfRule, 'half-rule')} />
            <div className="pt-4">
              <Button
                variant="secondary"
                onClick={handleBack}
                className={getAllowedClasses(styles.button, 'me-2')}
              >
                Back
              </Button>
              <Button
                variant="success"
                onClick={handleEdit}
                className={getAllowedClasses(styles.button, 'me-2')}
              >
                Edit
              </Button>
            </div>
            <div className={getAllowedClasses(styles.outerDiv, 'mt-5 h-75 border aligns-items-center')}>
              <h2 className={getAllowedClasses(styles.description)}>{currentRecipe.description}</h2>
            </div>
          </>
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

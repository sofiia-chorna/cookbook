import { useCallback, useEffect, useState, useDispatch, useSelector, useNavigate } from 'hooks/hooks.js';
import { Container as BootstrapContainer } from 'react-bootstrap';
import { recipeActionCreator } from 'store/actions.js';
import { getAllowedClasses, replaceIdParam } from 'helpers/helpers.js';
import { Spinner, RecipeModal } from 'components/common/common.js';
import { AppRoute } from 'common/enums/enums.js';
import { Container } from './components/components.js';
import styles from './styles.module.scss';

const Recipes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recipes, currentRecipe } = useSelector(state => ({
    recipes: state.recipes.recipes,
    currentRecipe: state.recipes.currentRecipe
  }));

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRecipeSelected, setIsRecipeSelected] = useState(false);

  const handleCreationCancel = () => {
    setIsModalVisible(false);
  };

  const handleCreationConfirm = data => {
    dispatch(
      recipeActionCreator.createRecipe({
        name: data.name,
        description: data.description
      })
    );
  };

  useEffect(() => {
    if (isRecipeSelected && currentRecipe) {
      handleCreationCancel();
      navigate(replaceIdParam(AppRoute.RECIPE, currentRecipe.id));
    }
  }, [currentRecipe, isRecipeSelected]);

  const handleRecipesLoad = useCallback(() => {
    dispatch(recipeActionCreator.loadRecipes());
  }, [dispatch]);

  useEffect(() => {
    handleRecipesLoad();
  }, [handleRecipesLoad]);

  const handleItemClick = useCallback(
    id => {
      dispatch(recipeActionCreator.loadRecipe(id));
      setIsRecipeSelected(true);
    },
    [dispatch]
  );

  const handleCreate = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="d-flex flex-column align-items-center pt-1">
      <BootstrapContainer className="position-relative d-flex flex-column align-items-center pt-5">
        <h1 className={getAllowedClasses(styles.title, 'mb-5')}>Select the recipe</h1>
        {recipes ? (
          <Container
            recipes={recipes}
            onItemClick={handleItemClick}
            onCreate={handleCreate}
          />
        ) : (
          <Spinner height="12rem" width="12rem" />
        )}
        <RecipeModal
          title="Create a recipe"
          showModal={isModalVisible}
          onModalClose={handleCreationCancel}
          handleFunction={handleCreationConfirm}
        />
      </BootstrapContainer>
    </div>
  );
};

export { Recipes };

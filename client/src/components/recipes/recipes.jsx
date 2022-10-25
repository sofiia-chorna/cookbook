import { useCallback, useEffect, useState, useDispatch, useSelector } from 'hooks/hooks.js';
import { Container as BootstrapContainer } from 'react-bootstrap';
import { recipeActionCreator } from 'store/actions.js';
import { Spinner } from 'components/common/common.js';
import { Container, CreateRecipeModal, ExpandedRecipe } from './components/components.js';

const recipesFilter = {
  from: 0,
  count: 10
};

const Recipes = () => {
  const dispatch = useDispatch();
  const { recipes, expandedRecipe } = useSelector(state => ({
    recipes: state.recipes.recipes,
    expandedRecipe: state.recipes.expandedRecipe
  }));

  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleRecipesLoad = useCallback(filtersPayload => {
    dispatch(recipeActionCreator.loadRecipes(filtersPayload));
  }, [dispatch]);

  useEffect(() => {
    recipesFilter.from = 0;
    handleRecipesLoad(recipesFilter);
    recipesFilter.from = recipesFilter.count; // for the next scroll
  }, []);

  const handleItemClick = useCallback(
    id => dispatch(recipeActionCreator.toggleExpandedRecipe(id)),
    [dispatch]
  );

  const handleCreate = () => setIsModalVisible(true);

  return (
    <div className="bg-light position-relative d-flex flex-column align-items-center pt-5 vh-100">
      <BootstrapContainer className="position-relative d-flex flex-column align-items-center pt-5 vh-100">
        <h1 className="h3 mb-5">Select the recipe</h1>
        {recipes ? (
          <Container
            recipes={recipes}
            onItemClick={handleItemClick}
            onCreate={handleCreate}
          />
        ) : (
          <Spinner height="12rem" width="12rem" />
        )}
        <CreateRecipeModal
          showModal={isModalVisible}
          onModalClose={handleCreationCancel}
          handleFunction={handleCreationConfirm}
        />
      </BootstrapContainer>
      {expandedRecipe && <ExpandedRecipe />}
    </div>
  );
};

export { Recipes };

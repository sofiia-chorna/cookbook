import * as React from 'react';
import { Modal } from 'react-bootstrap';
import { useCallback, useDispatch, useSelector } from 'hooks/hooks.js';
import { recipeActionCreator } from 'store/actions.js';
import { Spinner, FormField } from 'components/common/common.js';

const ExpandedRecipe = () => {
  const dispatch = useDispatch();
  const { recipe } = useSelector(state => ({
    recipe: state.recipes.expandedRecipe
  }));

  const handleExpandedRecipeToggle = useCallback(id => (
    dispatch(recipeActionCreator.toggleExpandedRecipe(id))
  ), [dispatch]);

  const handleExpandedPostClose = () => handleExpandedRecipeToggle();

  return (
    <Modal
      show
      className="d-flex align-items-center"
      dialogClassName="w-25 rounded"
      onHide={handleExpandedPostClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="fs-6">Expanded Recipe</Modal.Title>
      </Modal.Header>
      {recipe ? (
        <Modal.Body className="mx-0">
          <FormField
            value={recipe.name}
            as="input"
            label="Title"
          />
          <FormField
            value={recipe.description}
            as="textarea"
            label="Description"
            controlId="inputModalDescription"
            rows={5}
          />
        </Modal.Body>
      ) : <Spinner />}
    </Modal>
  );
};

export { ExpandedRecipe };

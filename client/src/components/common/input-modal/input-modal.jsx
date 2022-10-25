import * as React from 'react';
import PropTypes from 'prop-types';
import { recipeErrorType, recipeType } from 'common/prop-types/prop-types.js';
import { Button, Modal } from 'react-bootstrap';
import { FormField } from '../form-field/form-field.jsx';

export const InputModal = ({
  title,
  showModal,
  confirmButton,
  cancelButton,
  register,
  errors,
  recipe
}) => {
  return (
    <Modal
      className="d-flex align-items-center"
      dialogClassName="w-25 rounded"
      show={showModal}
      onHide={cancelButton?.onClick}
      backdrop="static"
      keyboard={false}
      onSubmit={confirmButton?.onClick}
    >
      <Modal.Header closeButton>
        <Modal.Title className="fs-6">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-0">
        <FormField
          as="input"
          label="Title"
          placeholder="Enter a recipe title"
          name="title"
          controlId="inputModalTitle"
          register={register('name')}
          errors={errors.name}
          value={recipe.name}
        />
        <FormField
          as="textarea"
          label="Description"
          placeholder="Enter a recipe description"
          name="description"
          controlId="inputModalDescription"
          register={register('description')}
          errors={errors.description}
          rows={5}
          value={recipe.description}
        />
      </Modal.Body>
      <Modal.Footer>
        {cancelButton && (
          <Button
            variant="secondary"
            onClick={cancelButton.onClick}
            disabled={cancelButton.disabled}
            className="me-2"
          >
            {cancelButton.text}
          </Button>
        )}
        {confirmButton && (
          <Button
            variant="success"
            onClick={confirmButton.onClick}
            disabled={confirmButton.disabled}
          >
            {confirmButton.text}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

InputModal.propTypes = {
  title: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  confirmButton: PropTypes.element,
  cancelButton: PropTypes.element,
  errors: recipeErrorType,
  recipe: recipeType
};

InputModal.defaultProps = {
  errors: {},
  confirmButton: React.createElement('div'),
  cancelButton: React.createElement('div'),
  recipe: {}
};

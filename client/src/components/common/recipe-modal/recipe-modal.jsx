import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  useEffect,
  useState,
  useAppForm,
  useSelector
} from 'hooks/hooks';
import { recipeType } from 'common/prop-types/prop-types.js';
import { recipe as recipeSchema } from 'validation-schemas/validation-schemas.js';
import { InputModal } from 'components/common/common';
import { DEFAULT_RECIPE_PAYLOAD } from '../../recipes/common/constants.js';

export const RecipeModal = ({
  title,
  showModal,
  onModalClose,
  handleFunction,
  recipe
}) => {
  const { creatingError } = useSelector(state => state.recipes);
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);

  useEffect(() => {
    if (creatingError !== '') {
      toast.info(creatingError);
    }
  }, [creatingError]);

  const { errors, reset, register, handleSubmit } = useAppForm({
    defaultValues: DEFAULT_RECIPE_PAYLOAD,
    validationSchema: recipeSchema
  });

  const handleClose = () => {
    onModalClose();
    reset(DEFAULT_RECIPE_PAYLOAD);
  };

  const handleSubmitForm = async data => {
    setSubmitDisabled(true);
    handleFunction(data);
    onModalClose();

    setSubmitDisabled(false);
    reset(DEFAULT_RECIPE_PAYLOAD);
  };

  return (
    <InputModal
      showModal={showModal}
      title={title}
      controlId="createRecipe"
      confirmButton={{
        text: 'Save',
        onClick: handleSubmit(handleSubmitForm),
        disabled: isSubmitDisabled
      }}
      cancelButton={{
        text: 'Cancel',
        onClick: handleClose,
        disabled: isSubmitDisabled
      }}
      errors={errors}
      register={register}
      recipe={recipe}
    />
  );
};

RecipeModal.propTypes = {
  title: PropTypes.string,
  showModal: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  handleFunction: PropTypes.func.isRequired,
  recipe: recipeType
};

RecipeModal.defaultProps = {
  title: '',
  recipe: {}
};

import { useForm } from 'react-hook-form';
import { UseFormMode } from 'common/enums/enums';
import { joiResolver } from '@hookform/resolvers/joi';

const useAppForm = ({ validationSchema, defaultValues, mode }) => {
  const {
    control,
    formState: { errors },
    reset,
    watch,
    handleSubmit,
    register
  } = useForm({
    defaultValues,
    resolver: validationSchema ? joiResolver(validationSchema) : undefined,
    mode: mode ?? UseFormMode.ON_SUBMIT
  });

  return {
    control,
    errors,
    reset,
    watch,
    handleSubmit,
    register
  };
};

export { useAppForm };

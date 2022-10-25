import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';
import { getAllowedClasses } from 'helpers/helpers';
import styles from './styles.module.scss';

export const FormField = ({
  label,
  placeholder,
  helper,
  register,
  errors,
  controlId,
  value,
  as,
  rows
}) => (
  <Form.Group className="mb-3" controlId={controlId}>
    <Form.Label className={getAllowedClasses(styles.label)}>{label}</Form.Label>
    {value ? (
      <Form.Control readOnly as={as} rows={rows} placeholder={value} />
    ) : (
      <Form.Control
        {...register}
        as={as}
        rows={rows}
        placeholder={placeholder}
        isInvalid={!!errors}
      />
    )}
    {errors && (
      <Form.Control.Feedback type="invalid">
        {errors?.message}
      </Form.Control.Feedback>
    )}
    {helper && (
      <Form.Text className={getAllowedClasses(styles.helper)}>
        {helper}
      </Form.Text>
    )}
  </Form.Group>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helper: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
  controlId: PropTypes.string,
  value: PropTypes.string,
  as: PropTypes.string,
  rows: PropTypes.number
};

FormField.defaultProps = {
  as: 'input',
  placeholder: '',
  rows: 1,
  helper: '',
  controlId: '',
  register: null,
  errors: null,
  value: null
};

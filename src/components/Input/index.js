import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import propTypes from 'prop-types';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
}

Input.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string,
};

Input.defaultProps = {
  label: null,
};

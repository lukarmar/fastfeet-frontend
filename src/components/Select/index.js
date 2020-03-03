import React, { useRef, useEffect } from 'react';
import { OptionTypeBase } from 'react-select';
import Select, { Props as AsyncProps } from 'react-select/async';
import { useField } from '@unform/core';

interface Props extends AsyncProps<OptionTypeBase> {
  name: string;
}

const AsyncSelect: React.FC<Props> = ({name, label, ...rest}) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: (ref: any) => {
        if(rest.isMulti) {
          if(!ref.select.state.value){
            return [];
          }

          return ref.select.state.value.map(
            (option: OptionTypeBase) => option.value,
          );
        } else {
          if(!ref.select.state.value) {
            return '';
          }
          return ref.select.state.value.value;
        }
      },
    });
  },[fieldName, registerField, rest.isMulti]);

  return (
    <>
    {label && <label htmlFor={fieldName}>{label}</label>}
    <Select
    cacheOptions
    defaultValue={defaultValue}
    ref={selectRef}
    classNamePrefix="react-select"
    {...rest}
    />
    </>
  )
}

export default AsyncSelect;

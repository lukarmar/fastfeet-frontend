import React from 'react';
import propTypes from 'prop-types';

import { Set } from './styles';

export default function AuthLayout({ children }) {
  return <Set>{children}</Set>;
}

AuthLayout.propTypes = {
  children: propTypes.element.isRequired,
};

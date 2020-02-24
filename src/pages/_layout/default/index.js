import React from 'react';
import propTypes from 'prop-types';

import Header from '~/components/Header';
import { Set } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Set>{children}</Set>
    </>
  );
}

DefaultLayout.propTypes = {
  children: propTypes.element.isRequired,
};

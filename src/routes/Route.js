import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layout/auth';
import DefaultLayout from '~/pages/_layout/default';

export default function RouteSet({ component: Component, isPrivate, ...rest }) {
  const signed = true;

  const Layout = signed ? DefaultLayout : AuthLayout;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/delivery" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteSet.propTypes = {
  isPrivate: propTypes.bool,
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
};

RouteSet.defaultProps = {
  isPrivate: false,
};

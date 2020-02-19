import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteSet({ component: Component, isPrivate, ...rest }) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/orders" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteSet.propTypes = {
  isPrivate: propTypes.bool,
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
};

RouteSet.defaultProps = {
  isPrivate: false,
};

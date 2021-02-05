import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const token = useSelector((state) => state.auth.token);
  let signed = false;
  const { pathname } = window.location;
  jwt.verify(token, 'projeto_artistas_e_albuns', (err, decode) => {
    if (!err) {
      if (decode) {
        signed = true;
      }
    } else {
      signed = false;
    }
  });

  if (!signed && isPrivate) {
    return <Redirect to={`/login${pathname}`} />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.proptTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

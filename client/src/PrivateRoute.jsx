import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <p>Unauthorized access. Please log in.</p>
        )
      }
    />
  );
};

export default PrivateRoute;
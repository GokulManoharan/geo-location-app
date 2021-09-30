import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({
    component: Component,
    ...rest
  }) => {
    const { loginData } = useSelector(state => state);
    console.log('pr', loginData)
    return (
      <Route
        {...rest}
        render={props => {
          if (loginData.isAuthenticated) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };

export default ProtectedRoute
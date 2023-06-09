import React from "react";
import { useSelector } from "react-redux";
import Loading from "../pages/Loading";
import { getToken } from "../utils/tokenStorage";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        getToken() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

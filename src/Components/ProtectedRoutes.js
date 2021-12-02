import React from "react";
import { useHistory, Route } from "react-router-dom";
const ProtectedRoutes = ({ auth, component: Component, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth) return history.push("/");
      }}
    />
  );
};

export default ProtectedRoutes;

// src/components/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.client.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

// PropTypes ile props’ları tanımlıyoruz
ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // component prop’u bir React bileşeni olmalı
  ...Route.propTypes, // Route bileşeninden gelen tüm prop’ları dahil ediyoruz (location, history, match vb.)
};

export default ProtectedRoute;
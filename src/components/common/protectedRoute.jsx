import React from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import auth from "../../services/userService";

export class ProtectedRoute extends React.PureComponent {
  render() {
    const { path, component: Component, render, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!auth.getCurrentUser()) {
            toast.warning("You first need to log in!");
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location },
                }}
              />
            );
          }

          return Component ? <Component {...props} /> : render(props);
        }}
      />
    );
  }
}

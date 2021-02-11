import React from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";

class ProtectedRoute extends React.Component {
  render() {
    const {
      path,
      component: Component,
      render,
      authenticated,
      ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!authenticated) {
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

const mapStateToProps = (state) => ({
  authenticated: state.auth.token,
});

export default connect(mapStateToProps)(ProtectedRoute);

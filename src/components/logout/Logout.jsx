import React from "react";
import { connect } from "react-redux";

import { deAuthenticated } from "./../../store/auth";

import { AUTH_TOKEN } from "../../config.json";

class Logout extends React.PureComponent {
  componentDidMount() {
    const { location, history, deAuthenticateUser } = this.props;
    localStorage.removeItem(AUTH_TOKEN);
    deAuthenticateUser();
    history.push(location.state ? location.state.from.pathname : "/");
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  deAuthenticateUser: () => dispatch(deAuthenticated()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

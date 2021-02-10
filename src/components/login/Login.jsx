import React from "react";
import Joi from "joi-browser";
import { connect } from "react-redux";

import { Form } from "../common/form/Form";
import { Spinner } from "./../spinner/Spinner";
import { authenticateUser } from "./../../store/auth";

import { AUTH_TOKEN } from "../../config.json";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("E-mail"),
    password: Joi.string().required().min(8).label("Password"),
  };

  componentDidUpdate() {
    const { location, history, token } = this.props;
    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
      history.push(
        location.state ? location.state.from.pathname : "/profile/details"
      );
    }
  }

  doSubmit = async () => {
    const { email, password } = this.state.data;
    this.props.authenticateUser(email, password);
  };

  render() {
    return (
      <div className="col-md-4 mx-auto">
        <h1 className="mb-5 text-center">Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput(
            "email",
            "E-mail",
            "email",
            "text-dark font-weight-bold",
            "form-control"
          )}
          {this.renderInput(
            "password",
            "Password",
            "password",
            "text-dark font-weight-bold",
            "form-control"
          )}
          {this.renderButton("Login")}
        </form>
        {this.props.loading && <Spinner />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser: (email, password) =>
    dispatch(authenticateUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

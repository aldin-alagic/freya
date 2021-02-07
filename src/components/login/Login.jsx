import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import { Form } from "../common/form/Form";
import userService from "../../services/userService";

export class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("E-mail"),
    password: Joi.string().required().min(8).label("Password"),
  };

  doSubmit = async () => {
    const { data: response } = await userService.login(this.state.data);
    if (response.status == 200) {
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success(response.message, { className: "alert-success" });
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/profile/details";
    } else {
      toast.error(response.message, { className: "alert-danger" });
    }
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
      </div>
    );
  }
}

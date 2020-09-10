import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("E-mail"),
    password: Joi.string().required().min(8).label("Password"),
  };

  doSubmit = async () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="col-md-4 mx-auto">
        <h1 className="mb-5">Login</h1>
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
export default Login;

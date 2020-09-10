import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Registration extends Form {
  state = {
    data: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "1",
    },
    errors: {},
    notify: {
      visible: false,
    },
  };

  schema = {
    username: Joi.string().min(4).max(25).required().label("Username"),
    firstname: Joi.string().required().label("First name"),
    lastname: Joi.string().required().label("Last name"),
    email: Joi.string().required().email().label("E-mail"),
    password: Joi.string().min(8).max(25).required(),
    confirmPassword: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .label("Confirm password")
      .options({ language: { any: { allowOnly: "must match password" } } }),
    role: Joi.string().label("User type"),
  };

  doSubmit = async () => {
    console.log("Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 mx-auto">
          <h1 className="mb-5">Register</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput(
              "firstname",
              "First name",
              "text",
              "text-dark font-weight-bold",
              "form-control"
            )}
            {this.renderInput(
              "lastname",
              "Last name",
              "text",
              "text-dark font-weight-bold",
              "form-control"
            )}
            {this.renderInput(
              "username",
              "Username",
              "text",
              "text-dark font-weight-bold",
              "form-control"
            )}
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
            {this.renderInput(
              "confirmPassword",
              "Confirm password",
              "password",
              "text-dark font-weight-bold",
              "form-control"
            )}
            <label className="text-dark font-weight-bold">User type</label>
            {this.renderRadio("role", "Customer", "role1", "1")}
            {this.renderRadio("role", "Expert", "role2", "2")}
            {this.renderButton("Join")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Registration;

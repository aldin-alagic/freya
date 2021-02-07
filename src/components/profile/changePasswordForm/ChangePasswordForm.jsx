import React from "react";
import Joi from "joi-browser";

import { Form } from "../../common/form/Form";

export class ChangePasswordForm extends Form {
  state = {
    data: {
      currentPassword: "",
      newPassword: "",
    },
    errors: {},
  };

  schema = {
    currentPassword: Joi.string()
      .min(8)
      .max(20)
      .required()
      .label("Current password"),
    newPassword: Joi.string().min(8).max(20).required().label("New password"),
    confirmPassword: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .label("Confirm password")
      .options({ language: { any: { allowOnly: "must match password" } } }),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12 ml-3">
            <h4>Change your password</h4>
            <hr className="mr-4" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
              <div className="col-12">
                {this.renderInput(
                  "currentPassword",
                  "Current password",
                  "password",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>
              <div className="col-12">
                {this.renderInput(
                  "newPassword",
                  "New password",
                  "password",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>
              <div className="col-12">
                {this.renderInput(
                  "confirmPassword",
                  "Confirm new password",
                  "password",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>
              <div className="col-10">{this.renderButton("Save changes")}</div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

import React from "react";
import Joi from "joi-browser";
import ReCAPTCHA from "react-google-recaptcha";

import { Form } from "./common/Form";

export class ReportForm extends Form {
  state = {
    data: {
      email: "",
      message: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().max(100).required().label("E-mail"),
    message: Joi.string().max(250).required().label("Message"),
  };

  componentDidMount() {}

  onCaptchaChange(value) {
    console.log("Captcha value:", value);
  }

  doSubmit = async () => {
    console.log("Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <div>
              {this.renderInput("email", "E-mail", "text", "", "form-control")}
            </div>
            <div>
              {this.renderTextArea(
                "message",
                "Message",
                100,
                5,
                "",
                "form-control"
              )}
            </div>
            <div>{this.renderFile("file", "Attach files")}</div>
            <ReCAPTCHA
              size="normal"
              render="explicit"
              sitekey="your_site_key"
              onChange={this.onCaptchaChange}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

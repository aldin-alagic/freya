import React, { Fragment } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import ReCAPTCHA from "react-google-recaptcha";

class ReportForm extends Form {
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
      <Fragment>
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
            <div>{this.renderFile("file", "Attach files", "file")}</div>
            <ReCAPTCHA
              size="normal"
              render="explicit"
              sitekey="your_site_key"
              onChange={this.onCaptchaChange}
            />
          </form>
        </div>
      </Fragment>
    );
  }
}
export default ReportForm;

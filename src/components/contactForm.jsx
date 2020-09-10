import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import ReCAPTCHA from "react-google-recaptcha";

class ContactForm extends Form {
  state = {
    data: {
      subject: "",
      message: "",
    },
    errors: {},
  };

  schema = {
    subject: Joi.string().max(50).required().label("Subject"),
    message: Joi.string().max(250).required().label("Description"),
  };

  componentDidMount() {}

  onCaptchaChange(value) {
    console.log("Captcha value:", value);
  }

  doSubmit = async () => {
    console.log("Submitted");
    /*const { data: response } = await userService.updateUserDetails(
      this.state.data
    );
    if (response.status == 200) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }*/
  };

  render() {
    return (
      <div className="col-6 d-flex justify-content-center pr-5">
        <form onSubmit={this.handleSubmit}>
          <div>
            {this.renderInput("subject", "Subject", "text", "", "form-control")}
          </div>
          <div>
            {this.renderTextArea(
              "message",
              "Message",
              100,
              4,
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
          <div>{this.renderButton("Submit")}</div>
        </form>
      </div>
    );
  }
}
export default ContactForm;

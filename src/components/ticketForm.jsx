import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Joi from "joi-browser";

import { Form } from "./common/Form";

export class TicketForm extends Form {
  state = {
    data: {
      subject: "",
      category: "",
      description: "",
    },
    categories: [
      { id: 1, text: "Category 1" },
      { id: 2, text: "Category 2" },
      { id: 3, text: "Category 3" },
    ],
    errors: {},
  };

  schema = {
    subject: Joi.string().max(50).required().label("Subject"),
    category: Joi.string().required().label("Category"),
    description: Joi.string().max(250).required().label("Description"),
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
      <React.Fragment>
        <div className="row d-flex justify-content-center">
          <form className="w-50" onSubmit={this.handleSubmit}>
            <div>
              {this.renderInput(
                "subject",
                "Subject",
                "text",
                "",
                "form-control"
              )}
            </div>
            <div>
              {this.renderSelect(
                "category",
                "Category",
                "",
                this.state.categories
              )}
            </div>
            <div>
              {this.renderTextArea(
                "description",
                "Description",
                100,
                4,
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
            <div>{this.renderButton("Submit")}</div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

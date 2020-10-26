import React, { Fragment } from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class DetailsForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      region: "",
      zipCode: "",
      country: "",
      phone: "",
      mailingList: "",
      payment: "",
      defaultBillingContact: "",
      description: "",
    },
    errors: {},
  };

  schema = {
    firstName: Joi.string().required().label("First name"),
    lastName: Joi.string().required().label("Last name"),
    companyName: Joi.string().allow("").label("Company name"),
    email: Joi.string().email().label("E-mail"),
    address1: Joi.string().required().label("Address 1"),
    address2: Joi.string().allow("").label("Address 2"),
    city: Joi.string().required().label("City"),
    region: Joi.string().allow("").label("State/Region"),
    zipCode: Joi.string().required().label("Zip Code"),
    country: Joi.string().required().label("Country"),
    phone: Joi.string().required().label("Phone number"),
    mailingList: Joi.allow("").label("Mailing list subscription"),
    payment: Joi.string().required().label("Phone number"),
    defaultBillingContact: Joi.string()
      .allow("")
      .label("Default billing contact"),
    description: Joi.string().allow("").label("Description"),
  };

  doSubmit = async () => {};

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-12 ml-3">
            <h4>Update your profile</h4>
            <hr className="mr-4" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
              <div className="col-12">
                {this.renderInput(
                  "firstName",
                  "First name*",
                  "text",
                  "text-dark font-weight-bold",
                  "form-control d-inline-block"
                )}
              </div>

              <div className="col-12">
                {this.renderInput(
                  "lastName",
                  "Last name*",
                  "text",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>

              <div className="col-12">
                {this.renderInput(
                  "companyName",
                  "Company name",
                  "text",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>

              <div className="col-12">
                {this.renderInput(
                  "email",
                  "E-mail*",
                  "email",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>

              <div className="col-12">
                {this.renderInput(
                  "address1",
                  "Address 1*",
                  "text",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>

              <div className="col-12">
                {this.renderInput(
                  "address2",
                  "Address 2",
                  "text",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>

              <div className="col-12">
                {this.renderInput(
                  "city",
                  "City*",
                  "text",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>

              <div className="col-12">
                {this.renderInput(
                  "region",
                  "State/Region",
                  "text",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>

              <div className="col-12">
                {this.renderInput(
                  "zipCode",
                  "Zip code*",
                  "text",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>

              <div className="col-12">
                {this.renderInput(
                  "country",
                  "Country*",
                  "text",
                  "text-dark font-weight-bold",
                  "form-control"
                )}
              </div>

              <div className="col-12">
                {this.renderPhone(
                  "phone",
                  "Phone number*",
                  "text-dark font-weight-bold"
                )}
              </div>

              <div className="col-12 mb-3">
                <p className="text-dark font-weight-bold">
                  Join our mailing list
                </p>
                {this.renderSwitchBox(
                  "mailingList",
                  "We would like to send you occasional news, information and special offers by email. To join our mailing list, simply tick the box below. You can unsubscribe at any time."
                )}
              </div>

              <div className="col-12">
                {this.renderSelect(
                  "payment",
                  "Payment Method",
                  "Use default (Set Per Order)",
                  [{ value: "0", label: "Default" }],
                  "text-dark font-weight-bold"
                )}
              </div>

              <div className="col-12">
                {this.renderSelect(
                  "payment",
                  "Default billing contact",
                  "Use default (Details Above)",
                  [{ value: "0", label: "Default" }],
                  "text-dark font-weight-bold"
                )}
              </div>

              <div className="col-12">
                {this.renderTextArea(
                  "description",
                  "Description",
                  100,
                  4,
                  "text-dark font-weight-bold",
                  "form-control w-100"
                )}
              </div>

              <div className="d-inline-block mx-3">
                {this.renderButton("Save changes")}
              </div>
              <button className="btn btn-secondary mt-3">Cancel</button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default DetailsForm;

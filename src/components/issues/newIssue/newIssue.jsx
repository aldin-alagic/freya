import React from "react";
import { toast } from "react-toastify";
import { Steps } from "rsuite";

import { Vehicle } from "./Vehicle";
import { Description } from "./Description";
import { Visibility } from "./Visibility";
import { Review } from "./Review";
import { Attachments } from "../../common/attachments/Attachments";
import { IssueType } from "./IssueType";

export class NewIssue extends React.Component {
  state = {
    step: 0,
    status: "process",
    data: {
      brand: null,
      model: null,
      year: null,
      version: null,
      fuelType: null,
      transmission: null,
      issueType: null,
      title: "",
      description: "",
      note: "",
      published: false,
    },
    errors: {},
  };

  onStepChange = (nextStep) => {
    let status = "process";
    const oldStep = this.state.step;
    let newStep = nextStep < 0 ? 0 : nextStep > 7 ? 7 : nextStep;

    if (newStep > oldStep && !this.stepValidation(oldStep)) {
      status = "error";
      newStep = oldStep;
    }
    this.setState({ step: newStep, status });
  };
  onNext = () => this.onStepChange(this.state.step + 1);
  onPrevious = () => this.onStepChange(this.state.step - 1);

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleVisibilityChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.checked;
    this.setState({ data });
  };

  handleIssueTypeChange = (issueType) => {
    const data = { ...this.state.data };
    data["issueType"] = issueType;
    this.setState({ data });
  };

  handleSelectChange = (option, action) => {
    const data = { ...this.state.data };
    data[action.name] = option;
    this.setState({ data });
  };

  stepValidation = (newStep) => {
    switch (newStep) {
      case 0:
        return this.vehicleValidation();
      case 1:
        return this.issueTypeValidation();
      case 2:
        return this.descriptionValidation();
      default:
        return true;
    }
  };

  vehicleValidation = () => {
    const {
      brand,
      model,
      year,
      version,
      fuelType,
      transmission,
    } = this.state.data;

    if (brand === null) {
      toast.warning("Information about car brand is required!");
      return false;
    } else if (model === null) {
      toast.warning("Information about car model is required!");
      return false;
    } else if (year === null) {
      toast.warning("Information about car year is required!");
      return false;
    } else if (version === null) {
      toast.warning("Information about car version is required!");
      return false;
    } else if (fuelType === null) {
      toast.warning("Information about car fuel type is required!");
      return false;
    } else if (transmission === null) {
      toast.warning("Information about car transmission is required!");
      return false;
    }
    return true;
  };

  issueTypeValidation = () => {
    if (this.state.data.issueType === null) {
      toast.warning("Information about issue type is required!");
      return false;
    }
    return true;
  };

  descriptionValidation = () => {
    const { title, description } = this.state.data;
    if (title === "") {
      toast.warning("Issue title is required!");
      return false;
    } else if (description === "") {
      toast.warning("Issue description is required!");
      return false;
    }
    return true;
  };

  handleSubmit = () => {};

  getComponent = (step) => {
    const {
      brand,
      model,
      year,
      version,
      fuelType,
      transmission,
      issueType,
      title,
      description,
      note,
      published,
    } = this.state.data;
    switch (step) {
      case 0:
        return (
          <Vehicle
            brand={this.state.data.brand}
            onChange={this.handleChange}
            onSelectChange={this.handleSelectChange}
            values={{ brand, model, year, version, fuelType, transmission }}
          />
        );
      case 1:
        return (
          <IssueType
            onIssueTypeChange={this.handleIssueTypeChange}
            issueType={issueType}
          />
        );
      case 2:
        return (
          <Description
            onChange={this.handleChange}
            values={{ title, description, note }}
          />
        );
      case 3:
        return <Attachments />;
      case 4:
        return (
          <Visibility
            onChange={this.handleVisibilityChange}
            published={published}
          />
        );
      case 5:
        return <Review data={this.state.data} />;
      default:
        return <Attachments />;
    }
  };

  render() {
    const { step, status } = this.state;
    return (
      <div>
        <Steps
          className="mb-3"
          current={step}
          currentStatus={status}
          small={true}
        >
          <Steps.Item title="Vehicle" />
          <Steps.Item title="Issue type" />
          <Steps.Item title="Description" />
          <Steps.Item title="Attachments" />
          <Steps.Item title="Visibility" />
          <Steps.Item title="Review" />
        </Steps>
        {this.getComponent(step)}
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-lg btn-primary m-1"
            onClick={this.onPrevious}
            disabled={step === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-lg btn-primary m-1"
            onClick={this.onNext}
            disabled={step === 7}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

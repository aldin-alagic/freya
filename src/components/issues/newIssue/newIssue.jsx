import React, { Component } from "react";
import Vehicle from "./vehicle";
import IssueType from "./issueType";
import Description from "./description";
import { Steps } from "rsuite";
import Attachments from "./attachments";
import Visibility from "./visibility";
import Review from "./review";

class NewIssue extends Component {
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
      issueTypeLabel: null,
      title: "",
      description: "",
      note: "",
      published: true,
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
    console.log("Check:", input.checked);
    const data = { ...this.state.data };
    data[input.name] = input.checked;
    this.setState({ data });
  };

  handleIssueTypeChange = (issueType, issueTypeLabel) => {
    console.log("issueType :", issueType);
    const data = { ...this.state.data };
    data["issueType"] = issueType;
    data["issueTypeLabel"] = issueTypeLabel;
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

    if (
      brand === null ||
      model === null ||
      year === null ||
      version === null ||
      fuelType === null ||
      transmission === null
    )
      return false;

    return true;
  };

  issueTypeValidation = () => {
    if (this.state.data.issueType === null) return false;
    return true;
  };

  descriptionValidation = () => {
    const { title, description } = this.state.data;
    if (title === "" || description === "") return false;
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
      issueTypeLabel,
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
            handleChange={this.handleChange}
            onIssueTypeChange={this.handleIssueTypeChange}
            issueType={issueType}
            issueTypeLabel={issueTypeLabel}
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
        return <Review />;
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
        <button
          className="btn btn-primary ml-0 mr-1"
          onClick={this.onPrevious}
          disabled={step === 0}
        >
          Previous
        </button>
        <button
          className={
            !this.stepValidation(step) === true && status === "error"
              ? "btn btn-danger m-1"
              : "btn btn-primary m-1"
          }
          onClick={this.onNext}
          disabled={step === 7}
        >
          Next
        </button>
      </div>
    );
  }
}

export default NewIssue;

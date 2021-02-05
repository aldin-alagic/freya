import React from "react";
import { Steps } from "rsuite";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

import { Vehicle } from "./Vehicle";
import { IssueType } from "./IssueType";
import { Description } from "./Description";
import { Visibility } from "./Visibility";
import { Review } from "./Review";
import { Attachments } from "./Attachments";

export class NewSolution extends React.Component {
  state = {
    step: 0,
    status: "process",
    data: {
      vehicles: [
        {
          brand: null,
          model: null,
          year: null,
          variant: null,
        },
      ],
      fuelType: null,
      transmission: null,
      issueTypeOption: null,
      title: "",
      shortDescription: "",
      detailedDescription: "",
      keywords: new Set(),
      visibility: true,
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

  handleSelectChange = (e) => {};

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleChangeVehicles = (action) => {
    const data = { ...this.state.data };

    if (action === "add") {
      data.vehicles = [
        ...data.vehicles,
        {
          brand: null,
          model: null,
          year: null,
          variant: null,
        },
      ];
      this.setState({ data });
    } else if (action === "remove" && data.vehicles.length > 1) {
      data.vehicles.pop();
      this.setState({ data });
    }
  };

  handleKeywordsChange = (keyword, action) => {
    const data = { ...this.state.data };
    if (action === "add") data.keywords.add(keyword);
    else if (action === "remove") data.keywords.delete(keyword);
    console.log(data.keywords);
    this.setState({ data });
  };

  handleVisibilityChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.checked;
    this.setState({ data });
  };

  handleIssueTypeChange = (issueTypeOption) => {
    const data = { ...this.state.data };
    data["issueTypeOption"] = issueTypeOption;
    this.setState({ data });
  };

  handleSelectChange = (e, action) => {
    console.log(e);
    console.log(action);
    let type = action.name.split("-")[0];
    let index = parseInt(action.name.split("-")[1]);
    const data = { ...this.state.data };
    console.log(data.vehicles[index]);
    data.vehicles[index][type] = e.value;
    console.log(data);
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
    const { vehicles, fuelType, transmission } = this.state.data;

    for (const vehicle of vehicles) {
      if (vehicle.brand === null) {
        toast.warning("Information about car brand is required!");
        return false;
      } else if (vehicle.model === null) {
        toast.warning("Information about car model is required!");
        return false;
      } else if (vehicle.year === null) {
        toast.warning("Information about car year is required!");
        return false;
      }
    }

    if (fuelType === null) {
      toast.warning("Information about car fuel type is required!");
      return false;
    } else if (transmission === null) {
      toast.warning("Information about car transmission is required!");
      return false;
    }
    return true;
  };

  issueTypeValidation = () => {
    if (this.state.data.issueTypeOption === null) {
      toast.warning("Information about issue type is required!");
      return false;
    }
    return true;
  };

  descriptionValidation = () => {
    const { title, shortDescription, detailedDescription } = this.state.data;
    if (title === "") {
      toast.warning("Solution title is required!");
      return false;
    } else if (shortDescription === "") {
      toast.warning("Short solution description is required!");
      return false;
    } else if (detailedDescription === "") {
      toast.warning("Detailed slution description is required!");
      return false;
    }
    return true;
  };

  handleSubmit = () => {};

  getComponent = (step) => {
    const {
      vehicles,
      fuelType,
      transmission,
      issueTypeOption,
      title,
      shortDescription,
      detailedDescription,
      keywords,
      published,
    } = this.state.data;

    switch (step) {
      case 0:
        return (
          <Vehicle
            onChangeVehicles={this.handleChangeVehicles}
            onChange={this.handleChange}
            onSelectChange={this.handleSelectChange}
            values={{ vehicles, fuelType, transmission }}
          />
        );
      case 1:
        return (
          <IssueType
            onIssueTypeOptionChange={this.handleIssueTypeChange}
            issueTypeOption={issueTypeOption}
          />
        );
      case 2:
        return (
          <Description
            onChange={this.handleChange}
            onKeywordsChange={this.handleKeywordsChange}
            values={{ title, shortDescription, detailedDescription, keywords }}
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
        return <Review values={this.state.data} />;
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
            <FontAwesomeIcon
              className="text-white"
              icon={faLongArrowAltLeft}
              size="lg"
            />
          </button>
          <button
            className="btn btn-lg btn-primary m-1"
            onClick={this.onNext}
            disabled={step === 7}
          >
            <FontAwesomeIcon
              className="text-white"
              icon={faLongArrowAltRight}
              size="lg"
            />
          </button>
        </div>
      </div>
    );
  }
}

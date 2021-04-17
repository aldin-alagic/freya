import React from "react";
import { connect } from "react-redux";

import { newIssueUpdated } from "../../../../store/issues";
import { VehicleDescriptions } from "../../../common/vehicleDescriptions/VehicleDescriptions";
import StepNavigator from "./../StepNavigator/StepNavigator";
import { DescriptionText } from "./../../../common/descriptionText/DescriptionText";

import { Thumbnails } from "../../../common/thumbnails/Thumbnails";

class Review extends React.Component {
  handleSubmit = () => {
    this.props.updateIssue({
      status: "process",
      step: 3,
    });
  };

  render() {
    const { vehicle, issue } = this.props.issue;

    return (
      <React.Fragment>
        <VehicleDescriptions
          vehicles={vehicle.vehicles}
          fuelType={vehicle.fuelType}
          transmission={vehicle.transmission}
        />
        <DescriptionText title="Issue title" text={issue.title} />
        <DescriptionText
          title="Issue type"
          text={`${issue.type} - ${issue.option}`}
          bold
        />
        <DescriptionText title="Issue code" text={issue.code} />
        <DescriptionText title="Issue description" text={issue.description} />
        <Thumbnails title="Issue attachments" attachments={issue.attachments} />
        <StepNavigator currentStep={2} onNextStepClick={this.handleSubmit} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  issue: state.entities.issues.issue,
});

const mapDispatchToProps = (dispatch) => ({
  updateIssue: (issue) => dispatch(newIssueUpdated(issue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);

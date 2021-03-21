import React from "react";
import { connect } from "react-redux";

import { newSolutionUpdated } from "../../../../store/solutions";
import { VehicleDescriptions } from "../../../common/vehicleDescriptions/VehicleDescriptions";
import StepNavigator from "./../StepNavigator/StepNavigator";
import { ItemList } from "../../../common/itemList/ItemList";
import { DescriptionText } from "./../../../common/descriptionText/DescriptionText";
import { DescriptionRichText } from "./../../../common/descriptionRichText/DescriptionRichText";

import { Thumbnails } from "../../../common/thumbnails/Thumbnails";

class Review extends React.Component {
  handleSubmit = () => {
    this.props.updateSolution({
      status: "process",
      step: 4,
    });
  };

  render() {
    const { vehicle, issue, solution } = this.props.solution;

    return (
      <React.Fragment>
        <VehicleDescriptions
          vehicles={vehicle.vehicles}
          fuelType={vehicle.fuelType}
          transmission={vehicle.transmission}
        />
        <DescriptionText
          title="Issue type"
          text={`${issue.type} - ${issue.option}`}
          bold
        />
        <DescriptionText title="Issue description" text={issue.description} />
        <Thumbnails title="Issue attachments" attachments={issue.attachments} />
        <DescriptionText title="Solution title" text={solution.title} />
        <DescriptionRichText
          title="Solution description"
          text={solution.description}
        />
        <ItemList title="Parts" items={solution.parts} />
        <ItemList title="Tools" items={solution.tools} />
        <Thumbnails
          title="Solution attachments"
          attachments={solution.attachments}
        />
        <StepNavigator currentStep={3} onNextStepClick={this.handleSubmit} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  solution: state.entities.solutions.solution,
});

const mapDispatchToProps = (dispatch) => ({
  updateSolution: (solution) => dispatch(newSolutionUpdated(solution)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);

import React from "react";
import { connect } from "react-redux";

import { newSolutionUpdated } from "../../../../store/solutions";
import { VehicleDescriptions } from "../../../common/vehicleDescriptions/VehicleDescriptions";
import StepNavigator from "./../StepNavigator/StepNavigator";
import { ItemList } from "../../../common/itemList/ItemList";
import { DescriptionText } from "./../../../common/descriptionText/DescriptionText";
import { Thumbnails } from "../../../common/thumbnails/Thumbnails";
import { Offers } from "./offers/Offers";

class Review extends React.Component {
  handleSubmit = () => {
    this.props.updateSolution({
      status: "process",
      step: 6,
    });
  };

  render() {
    const {
      vehicles,
      fuelType,
      transmission,
      issueTypeOption,
      description,
      attachments,
      offers,
    } = this.props.solution;

    return (
      <React.Fragment>
        <VehicleDescriptions
          vehicles={vehicles}
          fuelType={fuelType}
          transmission={transmission}
        />
        <DescriptionText title="Issue type" text={issueTypeOption} bold />
        <DescriptionText title="Solution title" text={description.title} />
        <DescriptionText
          title="Short solution description"
          text={description.shortDescription}
        />
        <DescriptionText
          title="Detailed solution description"
          text={description.detailedDescription}
        />
        <ItemList title="Parts" items={description.parts} />
        <ItemList title="Tools" items={description.tools} />
        <ItemList title="Keywords" items={description.keywords} />
        <Thumbnails attachments={attachments} />
        <Offers offers={offers} />
        <StepNavigator currentStep={5} onNextStepClick={this.handleSubmit} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  solution: state.entities.solutions.newSolution,
});

const mapDispatchToProps = (dispatch) => ({
  updateSolution: (solution) => dispatch(newSolutionUpdated(solution)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);

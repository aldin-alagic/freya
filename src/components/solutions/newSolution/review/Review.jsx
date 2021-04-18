import React from "react";
import { connect } from "react-redux";

import { newSolutionUpdated } from "../../../../store/solutions";
import { VehicleDescriptions } from "../../../common/vehicleDescriptions/VehicleDescriptions";
import StepNavigator from "./../StepNavigator/StepNavigator";
import { IssueSection } from "../../../common/product/issueSection/IssueSection";
import { SolutionSection } from './../../../common/product/solutionSection/SolutionSection';

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
        <IssueSection 
          type={issue.type}
          option={issue.option}
          description={issue.description}
          codes={issue.codes}
          attachments={issue.attachments}
        />
        <SolutionSection 
          title={solution.title}
          description={solution.description}
          parts={solution.parts}
          tools={solution.tools}
          attachments={issue.attachments}
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

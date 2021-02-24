import React from "react";
import { Steps } from "rsuite";
import { connect } from "react-redux";

import { Vehicle } from "./vehicle/Vehicle";
import { Description } from "./description/Description";
import Review from "./review/Review";
import { Attachments } from "./attachments/Attachments";
import { newSolutionReset } from "./../../../store/solutions";
import { loadVehicles } from "./../../../store/vehicles";
import { IssueType } from "./issueType/IssueType";
import { Spinner } from "./../../spinner/Spinner";
import { Offers } from "./offers/Offers";
import { Finish } from "./finish/Finish";

class NewSolution extends React.Component {
  componentDidMount() {
    this.props.loadVehicles();
  }

  componentWillUnmount() {
    this.props.resetNewSolution();
  }

  getComponent = (step) => {
    switch (step) {
      case 0:
        return <Vehicle />;
      case 1:
        return <IssueType />;
      case 2:
        return <Description />;
      case 3:
        return <Attachments />;
      case 4:
        return <Offers />;
      case 5:
        return <Review />;
      case 6:
        return <Finish />;
    }
  };

  render() {
    const { loading, step, status } = this.props;
    return (
      <React.Fragment>
        <Steps
          className="justify-content-start mb-3"
          current={step}
          currentStatus={status}
          small
        >
          <Steps.Item title="Vehicle" />
          <Steps.Item title="Issue" />
          <Steps.Item title="Description" />
          <Steps.Item title="Attachments" />
          <Steps.Item title="Offers" />
          <Steps.Item title="Review" />
          <Steps.Item title="Finish" />
        </Steps>
        {this.getComponent(step)}
        {loading && <Spinner />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.vehicles.loading,
  step: state.entities.solutions.newSolution.step,
  status: state.entities.solutions.newSolution.status,
});

const mapDispatchToProps = (dispatch) => ({
  loadVehicles: () => dispatch(loadVehicles()),
  resetNewSolution: () => dispatch(newSolutionReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSolution);

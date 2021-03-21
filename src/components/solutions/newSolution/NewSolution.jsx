import React from "react";
import { Steps } from "rsuite";
import { connect } from "react-redux";

import { Vehicle } from "./vehicle/Vehicle";
import { Solution } from "./solution/Solution";
import Review from "./review/Review";
import { newSolutionReset } from "./../../../store/solutions";
import { loadVehicles } from "./../../../store/vehicles";
import { Issue } from "./issue/Issue";
import { Spinner } from "./../../spinner/Spinner";
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
        return <Issue />;
      case 2:
        return <Solution />;
      case 3:
        return <Review />;
      case 4:
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
          <Steps.Item title="Solution" />
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
  step: state.entities.solutions.solution.step,
  status: state.entities.solutions.solution.status,
});

const mapDispatchToProps = (dispatch) => ({
  loadVehicles: () => dispatch(loadVehicles()),
  resetNewSolution: () => dispatch(newSolutionReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSolution);

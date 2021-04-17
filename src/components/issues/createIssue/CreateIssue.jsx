import React from "react";
import { Steps } from "rsuite";
import { connect } from "react-redux";

import { Vehicle } from "./vehicle/Vehicle";
import Review from "./review/Review";
import { newIssueReset } from "../../../store/issues";
import { loadVehicles } from "../../../store/vehicles";
import { Spinner } from "../../spinner/Spinner";
import { Issue } from './issue/Issue';
import { Finish } from "./finish/Finish";

class CreateIssue extends React.Component {
  componentDidMount() {
    this.props.loadVehicles();
  }

  componentWillUnmount() {
    this.props.resetNewIssue();
  }

  getComponent = (step) => {
    switch (step) {
      case 0:
        return <Vehicle />;
      case 1:
        return <Issue />;
      case 2:
        return <Review />;
      case 3:
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
  step: state.entities.issues.issue.step,
  status: state.entities.issues.issue.status,
});

const mapDispatchToProps = (dispatch) => ({
  loadVehicles: () => dispatch(loadVehicles()),
  resetNewIssue: () => dispatch(newIssueReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateIssue);

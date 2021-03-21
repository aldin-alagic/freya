import React from "react";
import { Steps } from "rsuite";
import { connect } from "react-redux";

import { Vehicle } from "./vehicle/Vehicle";
import { Description } from "./description/Description";
import Review from "./review/Review";
import { Attachments } from "./attachments/Attachments";
import { newIssueReset } from "../../../store/issues";
import { loadVehicles } from "../../../store/vehicles";
import { IssueType } from "./issueType/IssueType";
import { Spinner } from "../../spinner/Spinner";
import { Finish } from "./finish/Finish";

class NewIssue extends React.Component {
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
        return <IssueType />;
      case 2:
        return <Description />;
      case 3:
        return <Attachments />;
      case 4:
        return <Review />;
      case 5:
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
  step: state.entities.issues.newIssue.step,
  status: state.entities.issues.newIssue.status,
});

const mapDispatchToProps = (dispatch) => ({
  loadVehicles: () => dispatch(loadVehicles()),
  resetNewIssue: () => dispatch(newIssueReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewIssue);

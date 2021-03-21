import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { newSolutionUpdated } from "../../../../store/solutions";

class StepNavigator extends React.PureComponent {
  static propTypes = {
    currentStep: PropTypes.number.isRequired,
    onNextStepClick: PropTypes.func.isRequired,
  };

  render() {
    const { currentStep, onPreviousStepClick, onNextStepClick } = this.props;

    return (
      <div className="d-flex justify-content-center">
        <button
          type="button"
          disabled={currentStep === 0 ? true : false}
          onClick={() => onPreviousStepClick(currentStep - 1)}
          className="btn btn-lg btn-primary m-1"
        >
          <FontAwesomeIcon
            className="text-white"
            icon={faLongArrowAltLeft}
            size="lg"
          />
        </button>
        <button
          type="button"
          onClick={onNextStepClick}
          className="btn btn-lg btn-primary m-1"
        >
          <FontAwesomeIcon
            className="text-white"
            icon={currentStep !== 5 ? faLongArrowAltRight : faCheck}
            size={currentStep !== 5 ? "lg" : "md"}
          />
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onPreviousStepClick: (step) => dispatch(newSolutionUpdated({ step })),
});

export default connect(null, mapDispatchToProps)(StepNavigator);

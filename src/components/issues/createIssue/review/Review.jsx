import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import { newIssueUpdated } from "../../../../store/issues";
import { VehicleDescription } from "./vehicleDescription/VehicleDescription";
import StepNavigator from "./../StepNavigator/StepNavigator";

class Review extends React.Component {
  handleSubmit = () => {
    this.props.updateIssue({
      status: "process",
      step: 5,
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
    } = this.props.issue;

    const keywords =
      description.keywords.length > 0 ? (
        description.keywords.map((keyword, index) => (
          <span
            key={index}
            className="badge badge-pill badge-secondary px-4 py-2 m-1"
          >
            {keyword}
          </span>
        ))
      ) : (
        <span>Keywords have not been added.</span>
      );

    const fileThumbnails =
      attachments.length > 0 ? (
        attachments.map((attachment, index) => (
          <div key={index} className="text-center col-3 mt-2">
            <div>
              {attachment.data.startsWith("data:image") ? (
                <img
                  className="image-fit rounded border col-12 px-0"
                  src={attachment.data}
                  alt={`Attachment ${attachment.name}`}
                  height="150"
                />
              ) : (
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faFile}
                  size="7x"
                  fixedWidth
                />
              )}
              <p className="my-1">{attachment.name}</p>
            </div>
          </div>
        ))
      ) : (
        <span>Attachments have not been added.</span>
      );

    return (
      <React.Fragment>
        <h5 className="text-primary bg-light p-2">Vehicles</h5>
        {vehicles.map((vehicle, index) => (
          <VehicleDescription
            key={index}
            brand={vehicle.brand}
            model={vehicle.model}
            years={vehicle.years}
            version={vehicle.variant}
            fuelType={fuelType}
            transmission={transmission}
          />
        ))}
        <h5 className="text-primary bg-light p-2">Issue type</h5>
        <div className="row justify-content-start px-4 my-3">
          <span className="badge badge-pill badge-secondary px-4 py-2 m-1">
            {issueTypeOption}
          </span>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">Issue title</h5>
          <p className="text-justify px-3">{description.title}</p>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">Short issue description</h5>
          <p className="text-justify px-3">{description.shortDescription}</p>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">
            Detailed issue description
          </h5>
          <p className="text-justify px-3">{description.detailedDescription}</p>
        </div>
        <h5 className="text-primary bg-light p-2">Keywords</h5>
        <div className="row justify-content-start px-4 my-3">{keywords}</div>
        <h5 className="text-primary bg-light p-2">Attachments</h5>
        <div className="row justify-content-start px-4 my-3">
          {fileThumbnails}
        </div>

        <StepNavigator currentStep={4} onNextStepClick={this.handleSubmit} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  issue: state.entities.issues.newIssue,
});

const mapDispatchToProps = (dispatch) => ({
  updateIssue: (issue) => dispatch(newIssueUpdated(issue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);

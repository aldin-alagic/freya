import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faCheck } from "@fortawesome/free-solid-svg-icons";

import { newSolutionUpdated } from "../../../../store/solutions";
import StepNavigator from "./../StepNavigator/StepNavigator";

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

    const parts =
      description.parts.length > 0 ? (
        description.parts.map((part, index) => (
          <span
            key={index}
            className="badge badge-pill badge-secondary px-4 py-2 m-1"
          >
            {part}
          </span>
        ))
      ) : (
        <span>Parts have not been added.</span>
      );

    const tools =
      description.tools.length > 0 ? (
        description.tools.map((tool, index) => (
          <span
            key={index}
            className="badge badge-pill badge-secondary px-4 py-2 m-1"
          >
            {tool}
          </span>
        ))
      ) : (
        <span>Tools have not been added.</span>
      );

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
        <h5 className="text-primary bg-light p-2">Issue type</h5>
        <div className="row justify-content-start px-4 my-3">
          <span className="badge badge-pill badge-secondary px-4 py-2 m-1">
            {issueTypeOption}
          </span>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">Solution title</h5>
          <p className="text-justify px-3">{description.title}</p>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">
            Short solution description
          </h5>
          <p className="text-justify px-3">{description.shortDescription}</p>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">
            Detailed solution description
          </h5>
          <p className="text-justify px-3">{description.detailedDescription}</p>
        </div>
        <h5 className="text-primary bg-light p-2">Parts</h5>
        <div className="row justify-content-start px-4 my-3">{parts}</div>
        <h5 className="text-primary bg-light p-2">Tools</h5>
        <div className="row justify-content-start px-4 my-3">{tools}</div>
        <h5 className="text-primary bg-light p-2">Keywords</h5>
        <div className="row justify-content-start px-4 my-3">{keywords}</div>
        <h5 className="text-primary bg-light p-2">Attachments</h5>
        <div className="row justify-content-start px-4 my-3">
          {fileThumbnails}
        </div>
        <h5 className="text-primary bg-light p-2">Offers</h5>
        <div className="d-flex justify-content-around px-4 mt-3 mb-5">
          <div className="mr-4">
            <p className="text-dark font-weight-bold w-100 mb-0">
              Standard package includes:
            </p>
            <ul className="options-list mb-2">
              {offers.standard.options.map((option, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    className="text-success mr-2"
                    icon={faCheck}
                  />
                  {option}
                </li>
              ))}
            </ul>
            <div className="text-left">
              <span className="text-dark font-weight-bold mb-0">
                Price in tokens:
              </span>
              <span> {offers.standard.price}</span>
            </div>
          </div>
          <div>
            <p className="text-dark font-weight-bold w-100 mb-0">
              Premium package includes:
            </p>
            <ul className="options-list mb-2">
              {offers.premium.options.map((option, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    className="text-success mr-2"
                    icon={faCheck}
                  />
                  {option}
                </li>
              ))}
            </ul>
            <div className="text-left">
              <span className="text-dark font-weight-bold mb-0">
                Price in tokens:
              </span>
              <span> {offers.premium.price}</span>
            </div>
            <div className="text-left">
              <span className="text-dark font-weight-bold mb-0">
                Assistance minutes:
              </span>
              <span> {offers.premium.assistanceMinutes}</span>
            </div>
          </div>
        </div>
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

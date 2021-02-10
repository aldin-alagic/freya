import React from "react";

import { IssueTypeMenu } from "./IssueTypeMenu";
import { IssueTypeCard } from "../../common/issueTypeCard/IssueTypeCard";
import { PropTypes } from "prop-types";

import { issueTypes } from "./../../../utils/staticData";

export class IssueType extends React.Component {
  static propTypes = {
    issueType: PropTypes.string.isRequired,
    onIssueTypeChange: PropTypes.func.isRequired,
  };

  state = {
    issueTypeIndex: -1,
  };

  getComponent = (index) => {
    const { issueType } = this.props;
    const issueTypeData = issueTypes[index];

    return (
      <IssueTypeCard
        issueType={issueType}
        title={issueTypeData.title}
        options={issueTypeData.options}
        onChange={this.handleChange}
      />
    );
  };

  handleChange = ({ target: input }) => {
    const issueType = input.value;
    this.props.onIssueTypeChange(issueType);
    this.setState({ issueType });
  };

  handleClick = (issueTypeIndex) => {
    this.setState({ issueTypeIndex });
  };

  render() {
    const { issueTypeIndex } = this.state;
    const { issueType } = this.props;

    return (
      <div className="animate__animated animate__fadeIn">
        <IssueTypeMenu onClick={this.handleClick} active={issueTypeIndex} />
        <hr className="mt-3 mb-4" />
        <div className="mb-3">
          Selected issue:
          {issueType != null ? (
            <span className="text-primary ml-2">{issueType}</span>
          ) : (
            <span className="text-danger ml-2">None</span>
          )}
        </div>
        {issueTypeIndex !== -1 && this.getComponent(issueTypeIndex)}
      </div>
    );
  }
}

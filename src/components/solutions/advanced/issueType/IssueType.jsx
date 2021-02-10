import React from "react";

import { IssueTypeMenu } from "../IssueTypeMenu/IssueTypeMenu";
import { IssueTypeCard } from "../../../common/issueTypeCard/IssueTypeCard";

import { issueTypes } from "./../../../../utils/staticData";

export class IssueType extends React.PureComponent {
  state = {
    issueTypeIndex: -1,
    issueTypeOption: null,
  };

  getComponent = (index) => {
    const issueTypeData = issueTypes[index];

    return (
      <IssueTypeCard
        issueType={issueTypeData.title}
        title={issueTypeData.title}
        options={issueTypeData.options}
        onChange={this.handleChange}
      />
    );
  };

  handleChange = ({ target: input }) => {
    const issueTypeOption = input.value;
    this.setState({ issueTypeOption });
  };

  handleClick = (issueTypeIndex) => {
    this.setState({ issueTypeIndex });
  };

  render() {
    const { issueTypeIndex, issueTypeOption } = this.state;

    return (
      <div className="animate__animated animate__fadeIn">
        <IssueTypeMenu onClick={this.handleClick} active={issueTypeIndex} />
        <hr className="mt-3 mb-4" />
        <div className="mb-3">
          Selected issue:
          {issueTypeIndex != -1 ? (
            <span className="text-primary ml-2">{issueTypeOption}</span>
          ) : (
            <span className="text-danger ml-2">None</span>
          )}
        </div>
        {issueTypeIndex !== -1 && this.getComponent(issueTypeIndex)}
      </div>
    );
  }
}

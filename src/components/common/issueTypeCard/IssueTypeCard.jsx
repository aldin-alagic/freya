import React from "react";
import { PropTypes } from "prop-types";

import { Radio } from "../form/radio/Radio";

export class IssueTypeCard extends React.PureComponent {
  static propTypes = {
    issueType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { issueType, title, options, onChange } = this.props;

    return (
      <div className="card mb-4">
        <div className="card-header bg-light">{title}</div>
        <div className="card-body row justify-content-start px-5">
          {options.map((option) => (
            <Radio
              key={"issue-type-" + option}
              id={"issueType" + option}
              name="issueType"
              label={option}
              value={option}
              checked={issueType == option ? true : false}
              onChange={onChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

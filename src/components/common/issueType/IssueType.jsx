import React from "react";
import { PropTypes } from "prop-types";

export class IssueType extends React.PureComponent {
  static propTypes = {
    option: PropTypes.string.isRequired,
  };

  render() {
    return (
      <React.Fragment>
        <h5 className="text-primary bg-light p-2">Issue type</h5>
        <p className="font-weight-bold my-3 px-3">{this.props.option}</p>
      </React.Fragment>
    );
  }
}

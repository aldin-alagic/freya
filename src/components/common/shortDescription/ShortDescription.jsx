import React from "react";
import { PropTypes } from "prop-types";

export class ShortDescription extends React.PureComponent {
  static propTypes = {
    description: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h5 className="text-primary bg-light p-2">Short description</h5>
        <p className="text-justify my-3 px-3">{this.props.description}</p>
      </div>
    );
  }
}

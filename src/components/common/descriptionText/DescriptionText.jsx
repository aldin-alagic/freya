import React from "react";
import { PropTypes } from "prop-types";

export class DescriptionText extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bold: PropTypes.bool,
  };

  static defaultProps = {
    bold: false,
  };

  render() {
    const { title, text, bold } = this.props;
    return (
      <div>
        <h5 className="text-primary bg-light p-2">{title}</h5>
        <p
          className={
            bold
              ? "text-justify font-weight-bold my-3 px-3"
              : "text-justify my-3 px-3"
          }
        >
          {text}
        </p>
      </div>
    );
  }
}

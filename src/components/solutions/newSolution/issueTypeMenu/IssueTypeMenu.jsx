import React from "react";
import { PropTypes } from "prop-types";

export class IssueTypeMenu extends React.PureComponent {
  static propTypes = {
    active: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { onClick, active } = this.props;
    const activeStyle = "btn btn-sm btn-primary col-12";
    const inactiveStyle = "btn btn-sm btn-outline-primary col-12";
    const issueTypes = [
      "Additional electric parts",
      "Body and exterior",
      "Control and suspension",
      "Driving support and security",
      "Engine",
      "Interior",
      "Sensors",
    ];

    return (
      <div className="row mx-0">
        {issueTypes.map((val, index) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 p-1">
              <button
                className={active === index ? activeStyle : inactiveStyle}
                onClick={() => onClick(index)}
              >
                {val}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

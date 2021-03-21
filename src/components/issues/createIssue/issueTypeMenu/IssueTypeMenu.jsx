import React from "react";
import { PropTypes } from "prop-types";

import { issueTypes } from "./../../../../utils/staticData";

export class IssueTypeMenu extends React.PureComponent {
  static propTypes = {
    active: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    unregister: PropTypes.func.isRequired,
  };

  render() {
    const { onClick, unregister, active } = this.props;

    const activeStyle = "btn btn-sm btn-primary col-12";
    const inactiveStyle = "btn btn-sm btn-outline-primary col-12";
    const issueTypeCategories = issueTypes.map((val, index) => (
      <div key={index} className="col-lg-3 col-md-4 col-sm-6 p-1">
        <button
          type="button"
          className={active === index ? activeStyle : inactiveStyle}
          onClick={() => {
            unregister("issueTypeOption");
            onClick(index);
          }}
        >
          {val.title}
        </button>
      </div>
    ));

    return <div className="row mx-0">{issueTypeCategories}</div>;
  }
}

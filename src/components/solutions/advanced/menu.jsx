import React from "react";
import { NavLink } from "react-router-dom";

export class Menu extends React.PureComponent {
  render() {
    return (
      <div className="mb-4">
        <NavLink
          className="btn btn-outline-primary selection-left-option col-md-2"
          to="/solutions/advanced/vehicle"
        >
          My Vehicle
        </NavLink>
        <NavLink
          className="btn btn-outline-primary rounded-0 border-left-0 border-right-0 col-md-2"
          to="/solutions/advanced/issue-type"
        >
          Issue type
        </NavLink>
        <NavLink
          className="btn btn-outline-primary selection-right-option col-md-2"
          to="/solutions/advanced/additional-filters"
        >
          Additional filters
        </NavLink>
      </div>
    );
  }
}

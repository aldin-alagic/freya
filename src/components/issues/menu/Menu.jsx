import React from "react";
import { NavLink } from "react-router-dom";

export class Menu extends React.PureComponent {
  render() {
    return (
      <div className="d-flex mb-2">
        <div className="col-4 p-0">
          <NavLink
            className="btn btn-outline-secondary selection-left-option col-12"
            to="#"
          >
            Resolved
          </NavLink>
        </div>
        <div className="col-4 p-0">
          <NavLink
            className="btn btn-outline-secondary col-12 rounded-0 border-left-0 border-right-0"
            to="/home"
          >
            With bid
          </NavLink>
        </div>
        <div className="col-4 p-0">
          <NavLink
            className="btn btn-outline-secondary selection-right-option col-12"
            to="/home"
          >
            Published
          </NavLink>
        </div>
      </div>
    );
  }
}

import React from "react";
import { NavLink } from "react-router-dom";

export class Menu extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="my-3">
          <NavLink
            className="btn btn-outline-primary selection-left-option col-2"
            to="/solutions/basic"
          >
            Basic search
          </NavLink>
          <NavLink
            className="btn btn-outline-primary selection-right-option col-2"
            to="/solutions/advanced"
          >
            Advanced search
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

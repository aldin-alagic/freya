import React from "react";
import { NavLink } from "react-router-dom";

export class Menu extends React.PureComponent {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light px-0">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="overview">
            Overview
          </NavLink>
          <NavLink className="nav-item nav-link" to="description">
            Description
          </NavLink>
          <NavLink className="nav-item nav-link" to="attachments">
            Attachments
          </NavLink>
          <NavLink className="nav-item nav-link" to="offers">
            Offers
          </NavLink>
          <NavLink className="nav-item nav-link" to="activities">
            Activities
          </NavLink>
          <NavLink className="nav-item nav-link" to="advertise">
            Advertise
          </NavLink>
        </div>
      </div>
    );
  }
}

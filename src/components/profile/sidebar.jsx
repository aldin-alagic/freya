import React from "react";
import { NavLink } from "react-router-dom";

export class Sidebar extends React.PureComponent {
  render() {
    return (
      <div className="col-md-3 mb-3">
        <div className="list-group ">
          <NavLink
            className="list-group-item list-group-item-action"
            to="/profile/details"
          >
            My details
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/profile/billing-information"
          >
            Billing information
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/profile/change-password"
          >
            Change password
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/profile/security-settings"
          >
            Security settings
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/profile/email-history"
          >
            Email history
          </NavLink>
        </div>
      </div>
    );
  }
}

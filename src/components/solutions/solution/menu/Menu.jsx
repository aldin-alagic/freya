import React from "react";
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

export class Menu extends React.PureComponent {
  static propTypes = {
    owner: PropTypes.bool,
    guest: PropTypes.bool,
  };

  static defaultProps = {
    owner: false,
    guest: false,
  };

  render() {
    const { owner, guest } = this.props;
    return (
      <div className="navbar navbar-expand-lg navbar-light px-0">
        <div className="navbar-nav mr-auto">
          <NavLink className="nav-item nav-link" to="overview">
            Overview
          </NavLink>
          <NavLink className="nav-item nav-link" to="vehicle">
            Vehicle
          </NavLink>
          <NavLink className="nav-item nav-link" to="issue">
            Issue
          </NavLink>
          {owner && (
            <NavLink className="nav-item nav-link" to="solution">
              Solution
            </NavLink>
          )}
          {!guest && (
            <NavLink className="nav-item nav-link" to="expert">
              Expert
            </NavLink>
          )}
        </div>
      </div>
    );
  }
}

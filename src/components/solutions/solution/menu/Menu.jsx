import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

export class Menu extends React.PureComponent {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light px-0">
        <div className="navbar-nav mr-auto">
          <NavLink className="nav-item nav-link" to="overview">
            Overview
          </NavLink>
          <NavLink className="nav-item nav-link" to="description">
            Description
          </NavLink>
          <NavLink className="nav-item nav-link" to="attachments">
            Attachments
          </NavLink>
          <NavLink className="nav-item nav-link" to="expert">
            Expert
          </NavLink>
        </div>
      </div>
    );
  }
}

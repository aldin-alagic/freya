import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Menu = ({ likes, dislikes }) => {
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
      <div>
        <span className="m-1 text-primary">
          {likes} <FontAwesomeIcon icon={faThumbsUp} size="sm" />
        </span>
        <span className="m-1 text-danger">
          {dislikes} <FontAwesomeIcon icon={faThumbsDown} size="sm" />
        </span>
      </div>
    </div>
  );
};

export default Menu;

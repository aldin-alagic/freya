import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light px-0">
      <div className="navbar-nav mr-auto">
        <NavLink className="nav-item nav-link" to="overview">
          Overview
        </NavLink>
        <NavLink className="nav-item nav-link" to="attachments">
          Attachments
        </NavLink>
        <NavLink className="nav-item nav-link" to="expert">
          Expert
        </NavLink>
        <NavLink className="nav-item nav-link" to="message">
          Message
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Fragment>
      <NavLink className="btn btn-outline-primary col-md-2 m-1" to="/">
        Resolved
      </NavLink>
      <NavLink className="btn btn-outline-primary col-md-2 m-1" to="/home">
        With bid
      </NavLink>
      <NavLink className="btn btn-outline-primary col-md-2 m-1" to="/home">
        Published
      </NavLink>
    </Fragment>
  );
};

export default Menu;

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const FindSolutionMenu = () => {
  return (
    <Fragment>
      <NavLink
        className="btn btn-outline-primary col-md-2 m-1"
        to="/find-solution"
      >
        All solutions
      </NavLink>
      <NavLink className="btn btn-outline-primary col-md-2 m-1" to="/home">
        Purchased solutions
      </NavLink>
      <hr className="my-4" />
      <div className="mb-3">
        <NavLink
          className="btn btn-outline-primary col-md-1 m-1"
          to="/find-solution/basic"
        >
          Basic
        </NavLink>
        <NavLink
          className="btn btn-outline-primary col-md-1 m-1"
          to="/find-solution/advanced"
        >
          Advanced
        </NavLink>
      </div>
    </Fragment>
  );
};

export default FindSolutionMenu;

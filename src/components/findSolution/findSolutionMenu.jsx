import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const FindSolutionMenu = () => {
  return (
    <Fragment>
      <div className="my-3">
        <NavLink
          className="btn btn-outline-primary selection-left-option col-2"
          to="/find-solution/basic"
        >
          Basic
        </NavLink>
        <NavLink
          className="btn btn-outline-primary selection-right-option col-2"
          to="/find-solution/advanced"
        >
          Advanced
        </NavLink>
      </div>
    </Fragment>
  );
};

export default FindSolutionMenu;

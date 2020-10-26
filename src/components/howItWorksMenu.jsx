import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const HowItWorksMenu = () => {
  return (
    <Fragment>
      <h1 className="mb-4">What do you want?</h1>
      <NavLink
        className="btn btn-outline-primary selection-left-option col-md-2"
        to="/how-it-works/customer"
      >
        Solution
      </NavLink>
      <NavLink
        className="btn btn-outline-primary selection-right-option col-md-2"
        to="/how-it-works/expert"
      >
        Work
      </NavLink>
      <hr className="my-5" />
    </Fragment>
  );
};

export default HowItWorksMenu;

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const IssueTypeMenu = () => {
  return (
    <Fragment>
      <NavLink
        className="btn btn-outline-primary col-2 m-1"
        to="/find-solution/advanced/issue-type/interior"
      >
        Interior
      </NavLink>
      <NavLink
        className="btn btn-outline-primary col-2 m-1"
        to="/find-solution/advanced/issue-type/engine"
      >
        Engine
      </NavLink>
      <NavLink
        className="btn btn-outline-primary col-2 m-1"
        to="/find-solution/advanced/issue-type/body-and-exterior"
      >
        Body and exterior
      </NavLink>
      <NavLink
        className="btn btn-outline-primary col-2 m-1"
        to="/find-solution/advanced/issue-type/control-and-suspension"
      >
        Control and suspension
      </NavLink>
      <NavLink
        className="btn btn-outline-primary col-2 m-1"
        to="/find-solution/advanced/issue-type/driving-support-and-security"
      >
        Driving support and security
      </NavLink>
      <NavLink
        className="btn btn-outline-primary col-2 m-1"
        to="/find-solution/advanced/issue-type/energy-system"
      >
        Energy system
      </NavLink>
      <NavLink
        className="btn btn-outline-primary col-2 m-1"
        to="/find-solution/advanced/issue-type/sensors"
      >
        Sensors
      </NavLink>
      <NavLink
        className="btn btn-outline-primary col-2 m-1"
        to="/find-solution/advanced/issue-type/additional-electric-parts"
      >
        Additional electric parts
      </NavLink>
    </Fragment>
  );
};

export default IssueTypeMenu;

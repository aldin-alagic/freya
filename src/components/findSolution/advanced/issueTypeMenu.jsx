import React from "react";
import { NavLink } from "react-router-dom";

const IssueTypeMenu = () => {
  return (
    <div className="row mx-0">
      <div className="col-md-3 col-sm-6 p-1">
        <NavLink
          className="btn btn-outline-primary col-12"
          to="/find-solution/advanced/issue-type/interior"
        >
          Interior
        </NavLink>
      </div>

      <div className="col-md-3 col-sm-6  p-1">
        <NavLink
          className="btn btn-outline-primary col-12"
          to="/find-solution/advanced/issue-type/engine"
        >
          Engine
        </NavLink>
      </div>

      <div className="col-md-3 col-sm-6 p-1">
        <NavLink
          className="btn btn-outline-primary col-12"
          to="/find-solution/advanced/issue-type/body-and-exterior"
        >
          Body and exterior
        </NavLink>
      </div>

      <div className="col-md-3 col-sm-6 p-1">
        <NavLink
          className="btn btn-outline-primary col-12"
          to="/find-solution/advanced/issue-type/control-and-suspension"
        >
          Control and suspension
        </NavLink>
      </div>

      <div className="col-md-3 col-sm-6 p-1">
        <NavLink
          className="btn btn-outline-primary col-12"
          to="/find-solution/advanced/issue-type/driving-support-and-security"
        >
          Driving support and security
        </NavLink>
      </div>

      <div className="col-md-3 col-sm-6 p-1">
        <NavLink
          className="btn btn-outline-primary col-12"
          to="/find-solution/advanced/issue-type/energy-system"
        >
          Energy system
        </NavLink>
      </div>

      <div className="col-md-3 col-sm-6 p-1">
        <NavLink
          className="btn btn-outline-primary col-12"
          to="/find-solution/advanced/issue-type/sensors"
        >
          Sensors
        </NavLink>
      </div>

      <div className="col-md-3 col-sm-6 p-1">
        <NavLink
          className="btn btn-outline-primary col-12"
          to="/find-solution/advanced/issue-type/additional-electric-parts"
        >
          Additional electric parts
        </NavLink>
      </div>
    </div>
  );
};

export default IssueTypeMenu;

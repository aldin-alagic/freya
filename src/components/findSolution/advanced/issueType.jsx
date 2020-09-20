import React from "react";
import Interior from "./interior";
import Engine from "./engine";
import BodyExterior from "./bodyExterior";
import ControlSuspension from "./controlSuspension";
import DrivingSupportSecurity from "./drivingSupportSecurity";
import EnergySystem from "./energySystem";
import { Link, Redirect, Route } from "react-router-dom";
import Sensors from "./sensors";
import AdditionalElectricParts from "./additionalElectricParts";
import IssueTypeMenu from "./issueTypeMenu";

const IssueType = () => {
  return (
    <div className="animate__animated animate__fadeInLeft">
      <IssueTypeMenu />
      <hr className="mt-3 mb-4" />
      <Route
        path="/find-solution/advanced/issue-type/interior"
        component={Interior}
      />
      <Route
        path="/find-solution/advanced/issue-type/engine"
        component={Engine}
      />
      <Route
        path="/find-solution/advanced/issue-type/body-and-exterior"
        component={BodyExterior}
      />
      <Route
        path="/find-solution/advanced/issue-type/control-and-suspension"
        component={ControlSuspension}
      />
      <Route
        path="/find-solution/advanced/issue-type/driving-support-and-security"
        component={DrivingSupportSecurity}
      />
      <Route
        path="/find-solution/advanced/issue-type/energy-system"
        component={EnergySystem}
      />
      <Route
        path="/find-solution/advanced/issue-type/sensors"
        component={Sensors}
      />
      <Route
        path="/find-solution/advanced/issue-type/additional-electric-parts"
        component={AdditionalElectricParts}
      />
      <Redirect to="/find-solution/advanced/issue-type/interior" />

      <Link
        className="btn btn-primary col-2 m-1"
        to="/find-solution/advanced/vehicle"
      >
        Back
      </Link>
      <Link
        className="btn btn-primary col-2 m-1"
        to="/find-solution/advanced/additional-filters"
      >
        Next
      </Link>
    </div>
  );
};

export default IssueType;

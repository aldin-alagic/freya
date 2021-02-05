import React from "react";
import { Link, Redirect, Route } from "react-router-dom";

import { Interior } from "./Interior";
import { Engine } from "./Engine";
import { BodyExterior } from "./BodyExterior";
import { ControlSuspension } from "./ControlSuspension";
import { DrivingSupportSecurity } from "./DrivingSupportSecurity";
import { EnergySystem } from "./EnergySystem";
import { Sensors } from "./Sensors";
import { AdditionalElectricParts } from "./AdditionalElectricParts";
import { IssueTypeMenu } from "./IssueTypeMenu";

export class IssueType extends React.PureComponent {
  render() {
    return (
      <div className="animate__animated animate__fadeInLeft">
        <IssueTypeMenu />
        <hr className="mt-3 mb-4" />
        <Route
          path="/solutions/advanced/issue-type/interior"
          component={Interior}
        />
        <Route
          path="/solutions/advanced/issue-type/engine"
          component={Engine}
        />
        <Route
          path="/solutions/advanced/issue-type/body-and-exterior"
          component={BodyExterior}
        />
        <Route
          path="/solutions/advanced/issue-type/control-and-suspension"
          component={ControlSuspension}
        />
        <Route
          path="/solutions/advanced/issue-type/driving-support-and-security"
          component={DrivingSupportSecurity}
        />
        <Route
          path="/solutions/advanced/issue-type/energy-system"
          component={EnergySystem}
        />
        <Route
          path="/solutions/advanced/issue-type/sensors"
          component={Sensors}
        />
        <Route
          path="/solutions/advanced/issue-type/additional-electric-parts"
          component={AdditionalElectricParts}
        />
        <Redirect to="/solutions/advanced/issue-type/" />
        <Link
          className="btn btn-primary col-2 m-1"
          to="/solutions/advanced/vehicle"
        >
          Back
        </Link>
        <Link
          className="btn btn-primary col-2 m-1"
          to="/solutions/advanced/additional-filters"
        >
          Next
        </Link>
      </div>
    );
  }
}

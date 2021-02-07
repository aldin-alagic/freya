import React from "react";
import { Route, Redirect } from "react-router-dom";

import { Vehicle } from "./vehicle/Vehicle";
import { IssueType } from "./issueType/IssueType";
import { AdditionalFilters } from "./additionalFilters/AdditionalFilters";
import { Menu } from "./menu/Menu";

export class Advanced extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <hr className="my-4" />
        <Route path="/solutions/advanced/vehicle" component={Vehicle} />
        <Route path="/solutions/advanced/issue-type" component={IssueType} />
        <Route
          path="/solutions/advanced/additional-filters"
          component={AdditionalFilters}
        />
        <Redirect to="/solutions/advanced/vehicle" />
      </React.Fragment>
    );
  }
}

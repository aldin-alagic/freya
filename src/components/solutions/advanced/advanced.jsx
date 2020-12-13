import React from "react";
import { Route, Redirect } from "react-router-dom";
import Vehicle from "./vehicle";
import IssueType from "./issueType";
import AdditionalFilters from "./additionalFilters";
import Menu from "./menu";

const FindSolutionAdvanced = () => {
  return (
    <div>
      <Menu />
      <hr className="my-4" />
      <Route path="/solutions/advanced/vehicle" component={Vehicle} />
      <Route path="/solutions/advanced/issue-type" component={IssueType} />
      <Route
        path="/solutions/advanced/additional-filters"
        component={AdditionalFilters}
      />
      <Redirect to="/solutions/advanced/vehicle" />
    </div>
  );
};

export default FindSolutionAdvanced;

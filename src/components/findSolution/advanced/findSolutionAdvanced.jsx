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
      <Route path="/find-solution/advanced/vehicle" component={Vehicle} />
      <Route path="/find-solution/advanced/issue-type" component={IssueType} />
      <Route
        path="/find-solution/advanced/additional-filters"
        component={AdditionalFilters}
      />
      <Redirect to="/find-solution/advanced/vehicle" />
    </div>
  );
};

export default FindSolutionAdvanced;

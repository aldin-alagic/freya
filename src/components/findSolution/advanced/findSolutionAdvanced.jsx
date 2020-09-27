import React from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
import Vehicle from "./vehicle";
import IssueType from "./issueType";
import AdditionalFilters from "./additionalFilters";

const FindSolutionAdvanced = () => {
  return (
    <div>
      <div>
        <div className="mb-4">
          <NavLink
            className="btn btn-outline-primary col-md-2 m-1"
            to="/find-solution/advanced/vehicle"
          >
            My Vehicle
          </NavLink>
          <NavLink
            className="btn btn-outline-primary col-md-2 m-1"
            to="/find-solution/advanced/issue-type"
          >
            Issue type
          </NavLink>
          <NavLink
            className="btn btn-outline-primary col-md-2 m-1"
            to="/find-solution/advanced/additional-filters"
          >
            Additional filters
          </NavLink>
        </div>
      </div>
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

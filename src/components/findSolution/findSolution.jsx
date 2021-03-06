import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import FindSolutionBasic from "./basic/findSolutionBasic";
import FindSolutionMenu from "./findSolutionMenu";
import FindSolutionAdvanced from "./advanced/findSolutionAdvanced";

const FindSolution = () => {
  return (
    <Fragment>
      <h1>Find solution</h1>
      <hr className="mt-5 mb-4" />
      <FindSolutionMenu />
      <hr className="my-4" />
      <Route path="/find-solution/basic" component={FindSolutionBasic} />
      <Route path="/find-solution/advanced" component={FindSolutionAdvanced} />
      <Redirect to="/find-solution/basic" />
    </Fragment>
  );
};

export default FindSolution;

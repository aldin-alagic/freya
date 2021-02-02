import React, { Fragment } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import Basic from "./basic/basic";
import Menu from "./menu";
import Advanced from "./advanced/advanced";
import NewSolution from "./newSolution/newSolution";

const Solutions = () => {
  return (
    <Fragment>
      <h1>Solutions</h1>
      <hr className="mt-5 mb-4" />
      <Link className="btn btn-primary" to="/solution/new">
        New solution
      </Link>
      <hr className="my-4" />
      <Menu />
      <hr className="my-4" />
      <Route path="/solutions/basic" component={Basic} />
      <Route path="/solutions/advanced" component={Advanced} />
      <Redirect to="/solutions/basic" />
    </Fragment>
  );
};

export default Solutions;

import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Basic from "./basic/basic";
import Menu from "./menu";
import Advanced from "./advanced/advanced";

const Solutions = () => {
  return (
    <Fragment>
      <h1>Solutions</h1>
      <h4 className="mt-4">Select a filter option</h4>
      <Menu />
      <hr className="my-4" />
      <Route path="/solutions/basic" component={Basic} />
      <Route path="/solutions/advanced" component={Advanced} />
      <Redirect to="/solutions/basic" />
    </Fragment>
  );
};

export default Solutions;

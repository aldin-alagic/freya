import React, { Fragment } from "react";
import CustomerSmallCards from "./customerSmallCards";
import ExpertSmallCards from "./expertSmallCards";

const HomeSmallCards = () => {
  return (
    <Fragment>
      <h3 className="col-12 text-center mb-4">What's great about it?</h3>
      <CustomerSmallCards />
      <h3 className="col-12 text-center my-4">Why should experts use it?</h3>
      <ExpertSmallCards />
    </Fragment>
  );
};
export default HomeSmallCards;

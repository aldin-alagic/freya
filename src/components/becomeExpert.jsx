import React, { Fragment } from "react";
import ExpertSmallCards from "./expertSmallCards";
import PricingCards from "./pricingCards";

const BecomeExpert = () => {
  return (
    <Fragment>
      <h1>Become an expert</h1>
      <hr className="my-5" />
      <h3 className="col-12 text-center my-4">What are the benefits?</h3>
      <ExpertSmallCards />
      <hr className="my-5" />
      <PricingCards />
    </Fragment>
  );
};

export default BecomeExpert;

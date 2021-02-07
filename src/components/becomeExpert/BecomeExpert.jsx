import React from "react";

import { PricingCards } from "../common/pricingCards/PricingCards";
import { ExpertSmallCards } from "./../common/expertSmallCards/ExpertSmallCards";

export class BecomeExpert extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Become an expert</h1>
        <hr className="my-5" />
        <h3 className="col-12 text-center my-4">What are the benefits?</h3>
        <ExpertSmallCards />
        <hr className="my-5" />
        <PricingCards />
      </React.Fragment>
    );
  }
}

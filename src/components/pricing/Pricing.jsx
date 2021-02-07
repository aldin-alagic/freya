import React from "react";

import { TokensCard } from "./tokensCard/TokensCard";
import { PricingCards } from "../common/pricingCards/PricingCards";

export class Pricing extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Pricing</h1>
        <hr className="my-5" />
        <h3 className="mb-4">Regular users</h3>
        <div className="row">
          <div className="col-sm-12 col-md-8 mr-auto">
            <h5 className="mb-4">Why do you need tokens?</h5>
            <p className="text-justify">
              With tokens you can purchase existing solutions and answers to
              your problems or new challanges that you define once expert accept
              and provide you with one.With tokens you can also hire experts to
              help you extra on your problem per request or per hour depending
              how it is defined by expert himself.
            </p>
          </div>
          <TokensCard />
        </div>
        <hr className="my-5" />
        <h3 className="mb-4">Experts</h3>
        <div>
          <PricingCards />
        </div>
      </React.Fragment>
    );
  }
}

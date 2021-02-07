import React from "react";
import { Link } from "react-router-dom";

import { Cards } from "./cards/Cards";
import { SmallCards } from "./smallCards/SmallCards";
import { PricingCards } from "../common/pricingCards/PricingCards";

export class Home extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-8">
            <h3>Quick and easy way to find a verified solution</h3>
            <p className="text-justified">
              Solutions are provided by subject-matter experts from all around
              the world.
            </p>
            <Link
              className="nav-item btn btn-outline-primary mr-2 mb-2"
              to="/find-solution/"
            >
              Find solution
            </Link>
            <Link
              className="nav-item btn btn-outline-primary mb-2"
              to="/become-an-expert"
            >
              Become an expert
            </Link>
          </div>
        </div>
        <hr className="my-5" />
        <Cards />
        <hr className="my-5" />
        <SmallCards />
        <hr className="my-5" />
        <PricingCards />
      </React.Fragment>
    );
  }
}

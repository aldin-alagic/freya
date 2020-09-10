import React from "react";
import { Link } from "react-router-dom";
import HomeCards from "./homeCards";
import HomeSmallCards from "./homeSmallCards";
import PricingCards from "./pricingCards";

const Home = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-8">
          <h3 className="">Quick and easy way to find a verified solution</h3>
          <p className="text-justified">
            Solutions are provided by subject-matter experts from all around the
            world.
          </p>
          <Link className="nav-item btn btn-primary mr-2 mb-2" to="/">
            Find Solution
          </Link>
          <Link className="nav-item btn btn-outline-primary mb-2" to="/">
            Become an Expert
          </Link>
        </div>
      </div>
      <hr className="my-5" />
      <HomeCards />
      <hr className="my-5" />
      <HomeSmallCards />
      <hr className="my-5" />
      <PricingCards />
    </React.Fragment>
  );
};
export default Home;

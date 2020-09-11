import React, { Fragment } from "react";
import Card from "./common/card";
import imgTokens from "../images/tokens.svg";
import PricingCards from "./pricingCards";

const Pricing = () => {
  return (
    <Fragment>
      <h3 className="mb-4">Regular users</h3>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h5 className="mb-4">Why do you need tokens?</h5>
          <p className="text-justify">
            With tokens you can purchase existing solutions and answers to your
            problems or new challanges that you define once expert accept and
            provide you with one.With tokens you can also hire experts to help
            you extra on your problem per request or per hour depending how it
            is defined by expert himself.
          </p>
        </div>
        <div className="col-sm-2 col-md-2"></div>
        <Card
          className="animate__animated animate__fadeInDown col-sm-12 col-md-4 text-center"
          title="User Tokens"
          text="How much tokens do you need?"
          image={imgTokens}
          imageStyle="card-img-top h-50 p-5"
          url={"/newsletter"}
          button="Purchase"
          input={
            <input
              name="token-quantity"
              type="number"
              placeholder="1 Token = 1 &euro;"
              min="5"
              className="form-control text-center w-75 mx-auto"
            />
          }
          buttonStyle="btn btn-lg btn-outline-primary px-5"
        />
      </div>
      <hr className="my-5" />
      <h3 className="mb-4">Experts</h3>
      <div className="animate__animated animate__fadeInLeft">
        <PricingCards />
      </div>
    </Fragment>
  );
};

export default Pricing;

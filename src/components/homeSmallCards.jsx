import React, { Fragment } from "react";
import CustomerSmallCards from "./customerSmallCards";
import ExpertSmallCards from "./expertSmallCards";

const HomeSmallCards = () => {
  return (
    <Fragment>
      <CustomerSmallCards />
      <ExpertSmallCards />
    </Fragment>
  );
};
export default HomeSmallCards;

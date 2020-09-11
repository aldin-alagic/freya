import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import HowItWorksCustomer from "./howItWorksCustomer";
import HowItWorksExpert from "./howItWorksExpert";
import HowItWorksMenu from "./howItWorksMenu";

const HowItWorks = () => {
  return (
    <Fragment>
      <HowItWorksMenu />
      <Route path="/how-it-works/customer" component={HowItWorksCustomer} />
      <Route path="/how-it-works/expert" component={HowItWorksExpert} />
      <Redirect to="/how-it-works/customer" />
    </Fragment>
  );
};

export default HowItWorks;

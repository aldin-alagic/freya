import React from "react";
import { Route, Redirect } from "react-router-dom";

import { Customer } from "./Customer";
import { Expert } from "./Expert";
import { Menu } from "./Menu";

export class HowItWorks extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Route path="/how-it-works/customer" component={Customer} />
        <Route path="/how-it-works/expert" component={Expert} />
        <Redirect to="/how-it-works/customer" />
      </React.Fragment>
    );
  }
}
import React from "react";

import { CustomerSmallCards } from "../../common/customerSmallCards/CustomerSmallCards";
import { ExpertSmallCards } from "../../common/expertSmallCards/ExpertSmallCards";

export class SmallCards extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h3 className="col-12 text-center mb-4">What's great about it?</h3>
        <CustomerSmallCards />
        <h3 className="col-12 text-center my-4">Why should experts use it?</h3>
        <ExpertSmallCards />
      </React.Fragment>
    );
  }
}

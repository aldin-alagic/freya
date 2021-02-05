import React from "react";
import { Route, Redirect } from "react-router-dom";

import { Menu } from "./Menu";
import { Basic } from "./basic/Basic";
import { Advanced } from "./advanced/Advanced";

export class Solutions extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Solutions</h1>
        <h4 className="mt-4">Select a filter option</h4>
        <Menu />
        <hr className="my-4" />
        <Route path="/solutions/basic" component={Basic} />
        <Route path="/solutions/advanced" component={Advanced} />
        <Redirect to="/solutions/basic" />
      </React.Fragment>
    );
  }
}

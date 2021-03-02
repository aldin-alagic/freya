import React from "react";
import { Link, Route } from "react-router-dom";

import { Menu } from "./menu/Menu";
import { Basic } from "./basic/Basic";
import { Advanced } from "./advanced/Advanced";

export class Solutions extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Solutions</h1>
        <hr className="my-4" />
        <Menu />
        <hr className="my-4" />
        <Route path="/solutions/basic" component={Basic} />
        <Route path="/solutions/advanced" component={Advanced} />
      </React.Fragment>
    );
  }
}

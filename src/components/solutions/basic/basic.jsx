import React from "react";

import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { Widgets } from "./Widgets";

export class Basic extends React.PureComponent {
  render() {
    return (
      <div className="row">
        <Sidebar />
        <Main />
        <Widgets />
      </div>
    );
  }
}

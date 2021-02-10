import React from "react";

import { Sidebar } from "./sidebar/Sidebar";
import { Widgets } from "./widgets/Widgets";
import Main from "./main/Main";

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

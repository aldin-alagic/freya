import React from "react";

import { Sidebar } from "./sidebar/Sidebar";
import { Main } from "./main/Main";
import { Widgets } from "./widgets/Widgets";

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

import React from "react";
import { Link } from "react-router-dom";

import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { Widgets } from "./Widgets";

export class Issues extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>My issues</h1>
        <hr className="mt-5 mb-4" />
        <Link className="btn btn-primary" to="/issues/new">
          New issue
        </Link>
        <hr className="my-4" />
        <div className="row">
          <Sidebar />
          <Main />
          <Widgets />
        </div>
      </React.Fragment>
    );
  }
}

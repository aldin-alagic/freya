import React, { Fragment } from "react";
import Sidebar from "./sidebar";
import Main from "./main";
import Widgets from "./widgets";
import { Link } from "react-router-dom";

const Issues = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Issues;

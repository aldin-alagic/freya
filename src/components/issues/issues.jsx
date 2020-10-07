import React, { Fragment } from "react";
import Menu from "./menu";
import Sidebar from "./sidebar";
import Main from "./main";
import Widgets from "./widgets";

const Issues = () => {
  return (
    <Fragment>
      <h1>My issues</h1>
      <hr className="mt-5 mb-4" />
      <Menu />
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

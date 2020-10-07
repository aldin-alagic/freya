import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";
import Widgets from "./widgets";

const FindSolutionBasic = () => {
  return (
    <div className="row">
      <Sidebar />
      <Main />
      <Widgets />
    </div>
  );
};

export default FindSolutionBasic;

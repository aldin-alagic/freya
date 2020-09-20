import React from "react";
import FindSolutionSideBar from "./findSolutionSidebar";
import FindSolutionWidgets from "./findSolutionWidgets";
import FindSolutionMain from "./findSolutionMain";

const FindSolutionBasic = () => {
  return (
    <div className="row">
      <FindSolutionSideBar />
      <FindSolutionMain />
      <FindSolutionWidgets />
    </div>
  );
};

export default FindSolutionBasic;

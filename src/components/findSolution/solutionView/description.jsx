import React from "react";
import IssueType from "./issueType";
import ShortDescription from "./shortDescription";
import SideEffects from "./sideEffects";
import VehicleDescription from "./vehicleDescription";

const Description = () => {
  return (
    <div>
      <VehicleDescription />
      <IssueType />
      <ShortDescription />
      <SideEffects />
    </div>
  );
};

export default Description;

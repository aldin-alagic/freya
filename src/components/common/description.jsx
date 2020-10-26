import React from "react";
import IssueType from "./issueType";
import ShortDescription from "./shortDescription";
import VehicleDescription from "./vehicleDescription";

const Description = () => {
  return (
    <div>
      <VehicleDescription />
      <IssueType />
      <ShortDescription />
    </div>
  );
};

export default Description;

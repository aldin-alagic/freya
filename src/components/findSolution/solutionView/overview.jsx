import React from "react";
import VehicleDescription from "./vehicleDescription";
import IssueType from "./issueType";
import ShortDescription from "./shortDescription";
import SideEffects from "./sideEffects";
import Attachments from "./attachments";
import Expert from "./expert";

const Overview = () => {
  return (
    <div>
      <VehicleDescription />
      <IssueType />
      <ShortDescription />
      <SideEffects />
      <Attachments />
      <Expert />
    </div>
  );
};

export default Overview;

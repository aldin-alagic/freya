import React from "react";
import SideEffects from "./sideEffects";
import VehicleDescription from "./../../common/vehicleDescription";
import IssueType from "./../../common/issueType";
import ShortDescription from "./../../common/shortDescription";
import Attachments from "./../../common/attachments";
import Expert from "./../../common/expert";

const Overview = () => {
  return (
    <div>
      <VehicleDescription
        data={{
          brand: "Mercedes",
          model: "C200",
          year: "2019",
          version: "AMG",
          fuelType: "Hybrid",
          transmission: "Manual",
        }}
      />
      <IssueType />
      <ShortDescription />
      <SideEffects />
      <Attachments />
      <Expert />
    </div>
  );
};

export default Overview;

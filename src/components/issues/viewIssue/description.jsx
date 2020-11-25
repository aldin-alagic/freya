import React from "react";
import VehicleDescription from "./../../common/vehicleDescription";
import IssueType from "./../../common/issueType";
import ShortDescription from "./../../common/shortDescription";

const Description = () => {
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
    </div>
  );
};

export default Description;

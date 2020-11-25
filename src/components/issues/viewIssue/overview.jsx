import React, { Fragment } from "react";
import Attachments from "./../../common/attachments";
import Offers from "./offers";
import VehicleDescription from "./../../common/vehicleDescription";
import IssueType from "./../../common/issueType";
import ShortDescription from "./../../common/shortDescription";
import Activities from "./activities";
import Advertise from "./advertise";

const Overview = () => {
  return (
    <Fragment>
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
      <Attachments />
      <Activities />
      <Advertise />
      <Offers />
    </Fragment>
  );
};

export default Overview;

import React from "react";

import { Attachments } from "../../../common/attachments/Attachments";
import { Offers } from "../offers/Offers";
import { VehicleDescription } from "../../../common/vehicleDescription/VehicleDescription";
import { IssueType } from "../../../common/issueType/IssueType";
import { ShortDescription } from "../../../common/shortDescription/ShortDescription";
import { Activities } from "../activities/Activities";
import { Advertise } from "../advertise/Advertise";

export class Overview extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

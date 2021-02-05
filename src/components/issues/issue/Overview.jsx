import React from "react";

import { Attachments } from "../../common/Attachments";
import { Offers } from "./Offers";
import { VehicleDescription } from "../../common/VehicleDescription";
import { IssueType } from "../../common/IssueType";
import { ShortDescription } from "../../common/ShortDescription";
import { Activities } from "./Activities";
import { Advertise } from "./Advertise";

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

import React from "react";

import { SideEffects } from "./SideEffects";
import { VehicleDescription } from "../../common/vehicleDescription/VehicleDescription";
import { IssueType } from "../../common/issueType/IssueType";
import { ShortDescription } from "../../common/shortDescription/ShortDescription";
import { Attachments } from "../../common/attachments/Attachments";
import { Expert } from "../../common/expert/Expert";

export class Overview extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <VehicleDescription
          data={{
            brand: "Mercedes",
            model: "C200",
            year: 2019,
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
      </React.Fragment>
    );
  }
}

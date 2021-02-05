import React from "react";

import { SideEffects } from "./SideEffects";
import { VehicleDescription } from "../../common/VehicleDescription";
import { IssueType } from "../../common/IssueType";
import { ShortDescription } from "../../common/ShortDescription";
import { Attachments } from "../../common/Attachments";
import { Expert } from "../../common/Expert";

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

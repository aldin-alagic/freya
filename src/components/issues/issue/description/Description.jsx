import React from "react";

import { VehicleDescription } from "../../../common/vehicleDescription/VehicleDescription";
import { IssueType } from "../../../common/issueType/IssueType";
import { ShortDescription } from "../../../common/shortDescription/ShortDescription";

export class Description extends React.PureComponent {
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
      </React.Fragment>
    );
  }
}

import React from "react";

import { IssueType } from "../issueType/IssueType";
import { ShortDescription } from "../shortDescription/ShortDescription";
import { VehicleDescription } from "../vehicleDescription/VehicleDescription";

export class Description extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <VehicleDescription />
        <IssueType />
        <ShortDescription />
      </React.Fragment>
    );
  }
}

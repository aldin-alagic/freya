import React from "react";

import { IssueType } from "./IssueType";
import { ShortDescription } from "./ShortDescription";
import { VehicleDescription } from "./VehicleDescription";

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

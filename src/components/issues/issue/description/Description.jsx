import React from "react";

import { IssueType } from "../../../common/issueType/IssueType";
import { ShortDescription } from "../../../common/shortDescription/ShortDescription";

export class Description extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <IssueType />
        <ShortDescription />
      </React.Fragment>
    );
  }
}

import React from "react";

import { DetailsForm } from "./DetailsForm";

export class Details extends React.PureComponent {
  render() {
    return (
      <div className="col-md-9">
        <div className="card">
          <div className="card-body">
            <DetailsForm />
          </div>
        </div>
      </div>
    );
  }
}

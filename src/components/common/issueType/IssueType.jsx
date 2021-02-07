import React from "react";

export class IssueType extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h5 className="text-primary bg-light p-2">Issue type</h5>
        <div className="row justify-content-start px-4 my-3">
          <span className="badge badge-pill badge-secondary px-2 m-1">
            Gear box
          </span>
          <span className="badge badge-pill badge-secondary px-2 m-1">
            Interior
          </span>
          <span className="badge badge-pill badge-secondary px-2 m-1">
            Body
          </span>
        </div>
      </React.Fragment>
    );
  }
}

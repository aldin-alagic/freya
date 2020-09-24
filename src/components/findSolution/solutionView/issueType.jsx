import React from "react";

const IssueType = () => {
  return (
    <div>
      <h5 className="text-primary bg-light p-2">Issue type</h5>
      <div className="row justify-content-start px-4 mb-2">
        <span className="badge badge-pill badge-secondary px-2 m-1">
          Gear box
        </span>
        <span className="badge badge-pill badge-secondary px-2 m-1">
          Interior
        </span>
        <span className="badge badge-pill badge-secondary px-2 m-1">Body</span>
      </div>
    </div>
  );
};

export default IssueType;

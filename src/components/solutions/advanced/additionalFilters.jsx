import React from "react";

import { Link } from "react-router-dom";
import { Input } from "../../common/Input";

export class AdditionalFilters extends React.PureComponent {
  render() {
    return (
      <div className="animate__animated animate__fadeInLeft">
        <div className="card mb-4">
          <div className="card-header bg-light">Price</div>
          <div className="card-body row justify-content-start px-5">
            <Input
              name="price-from"
              label="From"
              styleInput="form-control m-1"
            />
            <Input name="price-to" label="To" styleInput="form-control m-1" />
          </div>
        </div>
        <Link
          className="btn btn-primary col-2 m-1"
          to="/find-solution/advanced/issue-type"
        >
          Back
        </Link>
        <Link className="btn btn-primary col-2 m-1" to="/home">
          Find
        </Link>
      </div>
    );
  }
}

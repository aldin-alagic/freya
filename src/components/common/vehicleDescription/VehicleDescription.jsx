import React from "react";
import { PropTypes } from "prop-types";

export class VehicleDescription extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <h5 className="text-primary bg-light p-2">Vehicle</h5>
        <div className="row justify-content-between px-4">
          <div className="d-inline-block m-1">
            <span>Brand</span>
            <h6>{data.brand}</h6>
          </div>
          <div className="d-inline-block m-1">
            <span>Model</span>
            <h6>{data.model}</h6>
          </div>
          <div className="d-inline-block m-1">
            <span>Version</span>
            <h6>{data.version}</h6>
          </div>
          <div className="d-inline-block m-1">
            <span>Year</span>
            <h6>{data.year}</h6>
          </div>
          <div className="d-inline-block m-1">
            <span>Fuel type</span>
            <h6>{data.fuelType}</h6>
          </div>
          <div className="d-inline-block m-1">
            <span>Transmission</span>
            <h6>{data.transmission}</h6>
          </div>
          <div className="d-inline-block m-1">
            <span>Filter</span>
            <h6>-</h6>
          </div>
        </div>
      </div>
    );
  }
}

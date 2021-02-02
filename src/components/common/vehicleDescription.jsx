import React from "react";

const VehicleDescription = ({ values }) => {
  return (
    <div>
      <h5 className="text-primary bg-light p-2">Vehicle</h5>
      <div className="row justify-content-between px-4">
        <div className="d-inline-block m-1">
          <span>Brand</span>
          <h6>{values.brand}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Model</span>
          <h6>{values.model}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Version</span>
          <h6>{values.version}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Year</span>
          <h6>{values.year}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Fuel type</span>
          <h6>{values.fuelTypeOption}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Transmission</span>
          <h6>{values.transmission}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Filter</span>
          <h6>-</h6>
        </div>
      </div>
    </div>
  );
};

export default VehicleDescription;

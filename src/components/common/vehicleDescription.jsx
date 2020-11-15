import React from "react";

const VehicleDescription = ({ data }) => {
  return (
    <div>
      <h5 className="text-primary bg-light p-2">Vehicle</h5>
      <div className="row justify-content-between px-4">
        <div className="d-inline-block m-1">
          <span>Brand</span>
          <h6>{data.brand.value}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Model</span>
          <h6>{data.model.value}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Version</span>
          <h6>{data.version.value}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Year</span>
          <h6>{data.year.value}</h6>
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
};

export default VehicleDescription;

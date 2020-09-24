import React from "react";
import Vehicle from "../../data/vehicle";

const VehicleDescription = () => {
  const vehicle = new Vehicle(
    "Mercedes",
    "C200",
    "AMG",
    "2016",
    "Diesel",
    "Automatic"
  );

  return (
    <div>
      <h5 className="text-primary bg-light p-2">Vehicle</h5>
      <div className="row justify-content-between px-4">
        <div className="d-inline-block m-1">
          <span>Brand</span>
          <h6>{vehicle.brand}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Model</span>
          <h6>{vehicle.model}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Version</span>
          <h6>{vehicle.version}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Year</span>
          <h6>{vehicle.year}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Fuel type</span>
          <h6>{vehicle.fuelType}</h6>
        </div>
        <div className="d-inline-block m-1">
          <span>Transmission</span>
          <h6>{vehicle.transmission}</h6>
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

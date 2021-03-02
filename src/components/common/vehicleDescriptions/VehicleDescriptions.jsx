import React from "react";
import { PropTypes } from "prop-types";

export class VehicleDescriptions extends React.Component {
  static propTypes = {
    vehicles: PropTypes.arrayOf(PropTypes.object).isRequired,
    fuelType: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
  };

  render() {
    const { vehicles, fuelType, transmission } = this.props;

    return (
      <React.Fragment>
        <h5 className="text-primary bg-light p-2">Vehicles</h5>
        <div className="my-3">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="row text-center">
              <div className="col-2">
                <span>Brand</span>
                <h6>{vehicle.brand}</h6>
              </div>
              <div className="col-2">
                <span>Model</span>
                <h6>{vehicle.model}</h6>
              </div>
              <div className="col-2">
                <span>Variant</span>
                <h6>{vehicle.variant ? vehicle.variant : "-"}</h6>
              </div>
              <div className="col-2">
                <span>Years</span>
                <h6>{vehicle.years.join(", ")}</h6>
              </div>
              <div className="col-2">
                <span>Fuel type</span>
                <h6>{fuelType}</h6>
              </div>
              <div className="col-2">
                <span>Transmission</span>
                <h6>{transmission}</h6>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

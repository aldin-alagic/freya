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
            <div key={index} className="row text-center mb-2">
              <div className="col-2">
                <h6 className="mb-0">Brand</h6>
                <span>{vehicle.brand}</span>
              </div>
              <div className="col-2">
                <h6 className="mb-0">Model</h6>
                <span>{vehicle.model}</span>
              </div>
              <div className="col-2">
                <h6 className="mb-0">Variant</h6>
                <span>{vehicle.variant ? vehicle.variant : "-"}</span>
              </div>
              <div className="col-2">
                <h6 className="mb-0">Years</h6>
                <span>{vehicle.years.join(", ")}</span>
              </div>
              <div className="col-2">
                <h6 className="mb-0">Fuel type</h6>
                <span>{fuelType}</span>
              </div>
              <div className="col-2">
                <h6 className="mb-0">Transmission</h6>
                <span>{transmission}</span>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

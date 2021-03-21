import React from "react";
import { PropTypes } from "prop-types";

export class VehicleDescription extends React.Component {
  static propTypes = {
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    years: PropTypes.arrayOf(PropTypes.number).isRequired,
    variant: PropTypes.string,
    fuelType: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
  };

  render() {
    const { brand, model, years, variant, fuelType, transmission } = this.props;

    return (
      <React.Fragment>
        <div className="row px-4 text-center">
          <div className="col-2">
            <span>Brand</span>
            <h6>{brand}</h6>
          </div>
          <div className="col-2">
            <span>Model</span>
            <h6>{model}</h6>
          </div>
          <div className="col-2">
            <span>Variant</span>
            <h6>{variant ? variant : "-"}</h6>
          </div>
          <div className="col-2">
            <span>Years</span>
            <h6>{years.join(", ")}</h6>
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
      </React.Fragment>
    );
  }
}

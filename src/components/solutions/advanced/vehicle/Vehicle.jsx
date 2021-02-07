import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { SelectBox } from "../../../common/form/selectBox/SelectBox";
import { Radio } from "../../../common/form/radio/Radio";

export class Vehicle extends React.Component {
  render() {
    const fuelTypeOptions = [
      { value: 1, label: "Petrol" },
      { value: 2, label: "Diesel" },
      { value: 3, label: "Electric" },
      { value: 4, label: "Ethanol (FFV, E85, etc.)" },
      { value: 5, label: "Hybrid (Petrol/Electric)" },
      { value: 6, label: "Hybrid (Diesel/Electric)" },
      { value: 7, label: "Hydrogen" },
      { value: 8, label: "Natural gas" },
      { value: 9, label: "Other" },
    ];

    const transmitionOptions = [
      { value: 1, label: "Manual" },
      { value: 2, label: "Semi-automatic" },
      { value: 3, label: "Automatic" },
    ];

    return (
      <div className="animate__animated animate__fadeInLeft">
        <div className="card mb-4">
          <div className="card-header bg-light">Brand, Model, Version</div>
          <div className="card-body row justify-content-center">
            <div className="col-md-3">
              <SelectBox
                name="brand"
                placeholder="Brand"
                label="Brand"
                options={[
                  { value: 0, label: "Mercedes" },
                  { value: 1, label: "BMW" },
                  { value: 2, label: "Audi" },
                ]}
              />
            </div>

            <div className="col-md-3">
              <SelectBox
                name="model"
                placeholder="Model"
                label="Model"
                options={[
                  { value: 0, label: "C200" },
                  { value: 1, label: "E220" },
                  { value: 2, label: "S230" },
                ]}
              />
            </div>

            <div className="col-md-3">
              <SelectBox
                name="version"
                placeholder="Version"
                label="Version"
                options={[{ value: 0, label: "AMG" }]}
              />
            </div>

            <div className="align-self-center mt-3">
              <FontAwesomeIcon
                className="text-danger m-1"
                icon={faTimes}
                size="2x"
              />
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-light">Fuel type</div>
          <div className="card-body row justify-content-start px-5">
            {fuelTypeOptions.map((option) => (
              <Radio
                key={"fuel-type-" + option.value}
                id={"fuel-type-" + option.value}
                name="fuel-type"
                label={option.label}
                value={option.value}
              />
            ))}
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-light">Transmition</div>
          <div className="card-body row justify-content-around px-5">
            {transmitionOptions.map((option) => (
              <Radio
                key={"transmition-type-" + option.value}
                id={"transmition-type-" + option.value}
                name="transmition-type"
                label={option.label}
                value={option.value}
              />
            ))}
          </div>
        </div>
        <Link
          className="btn btn-primary col-2 m-1"
          to="/find-solution/advanced/issue-type"
        >
          Next
        </Link>
      </div>
    );
  }
}

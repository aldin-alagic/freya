import React from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Radio from "../../common/radio";

const Vehicle = ({ values, onChange, onSelectChange }) => {
  const animatedComponents = makeAnimated();
  const fuelTypeOptions = [
    "Petrol",
    "Diesel",
    "Electric",
    "Ethanol (FFV, E85, etc.)",
    "Hybrid (Petrol/Electric)",
    "Hybrid (Diesel/Electric)",
    "Hydrogen",
    "Natural gas",
    "Other",
  ];
  const transmitionOptions = ["Manual", "Semi-automatic", "Automatic"];
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="card mb-4">
        <div className="card-header bg-light">Brand, Model, Version</div>
        <div className="card-body row justify-content-center">
          <div className="col-md-3">
            <label htmlFor="brand">Brand</label>
            <Select
              name="brand"
              placeholder="Brand"
              label="Brand"
              options={[
                { value: "Mercedes", label: "Mercedes" },
                { value: "BMW", label: "BMW" },
                { value: "Audi", label: "Audi" },
              ]}
              value={values.brand}
              isSearchable={true}
              isClearable={true}
              onChange={onSelectChange}
              components={animatedComponents}
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="brand">Model</label>
            <Select
              name="model"
              placeholder="Model"
              label="Model"
              options={[
                { value: "C200", label: "C200" },
                { value: "E220", label: "E220" },
                { value: "S230", label: "S230" },
              ]}
              value={values.model}
              isSearchable={true}
              isClearable={true}
              onChange={onSelectChange}
              components={animatedComponents}
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="brand">Year</label>
            <Select
              name="year"
              placeholder="Year"
              label="Year"
              options={[
                { value: "2010", label: "2010" },
                { value: "2011", label: "2011" },
                { value: "2012", label: "2012" },
              ]}
              value={values.year}
              isSearchable={true}
              isClearable={true}
              onChange={onSelectChange}
              components={animatedComponents}
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="brand">Version</label>
            <Select
              name="version"
              placeholder="Version"
              label="Version"
              options={[{ value: "AMG", label: "AMG" }]}
              value={values.version}
              isSearchable={true}
              isClearable={true}
              onChange={onSelectChange}
              components={animatedComponents}
            />
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-light">Fuel type</div>
        <div className="card-body row justify-content-start px-5">
          {fuelTypeOptions.map((option) => (
            <Radio
              key={"fuel-type-" + option}
              id={"fuelType-" + option}
              name="fuelType"
              label={option}
              value={option}
              checked={values.fuelType == option ? true : false}
              onChange={onChange}
            />
          ))}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-light">Transmission</div>
        <div className="card-body row justify-content-around px-5">
          {transmitionOptions.map((option) => (
            <Radio
              key={"transmission-type-" + option}
              id={"transmission-" + option}
              name="transmission"
              label={option}
              value={option}
              checked={values.transmission == option ? true : false}
              onChange={onChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;

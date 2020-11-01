import React from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Radio from "../../common/radio";

const Vehicle = ({ values, onChange, onSelectChange }) => {
  const animatedComponents = makeAnimated();
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
                { value: 1, label: "Mercedes" },
                { value: 2, label: "BMW" },
                { value: 3, label: "Audi" },
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
                { value: 1, label: "C200" },
                { value: 2, label: "E220" },
                { value: 3, label: "S230" },
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
                { value: 2010, label: "2010" },
                { value: 2011, label: "2011" },
                { value: 2012, label: "2012" },
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
              options={[{ value: 1, label: "AMG" }]}
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
              key={"fuel-type-" + option.value}
              id={"fuelType-" + option.value}
              name="fuelType"
              label={option.label}
              value={option.value}
              checked={values.fuelType == option.value ? true : false}
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
              key={"transmission-type-" + option.value}
              id={"transmission-" + option.value}
              name="transmission"
              label={option.label}
              value={option.value}
              checked={values.transmission == option.value ? true : false}
              onChange={onChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;

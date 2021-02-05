import React from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Radio from "../../common/radio";

const Vehicle = ({
  values,
  onAddVehicle,
  onRemoveVehicle,
  onChange,
  onSelectChange,
}) => {
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
        <div className="card-body">
          {values.vehicles.map((val, index) => {
            let brandId = `brand-${index}`,
              modelId = `model-${index}`,
              yearId = `year-${index}`,
              variantId = `variant-${index}`;

            return (
              <div
                className="row justify-content-center animate__animated animate__fadeIn my-3"
                key={index}
              >
                <div className="col-md-3">
                  <Select
                    name={brandId}
                    placeholder="Brand"
                    label="Brand"
                    options={[
                      { value: "Mercedes", label: "Mercedes" },
                      { value: "BMW", label: "BMW" },
                      { value: "Audi", label: "Audi" },
                    ]}
                    value={{
                      value:
                        values.vehicles[index].brand !== null
                          ? values.vehicles[index].brand
                          : "Brand",
                      label:
                        values.vehicles[index].brand !== null
                          ? values.vehicles[index].brand
                          : "Brand",
                    }}
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    isSearchable
                    isClearable
                    onChange={onSelectChange}
                    components={animatedComponents}
                  />
                </div>

                <div className="col-md-3">
                  <Select
                    name={modelId}
                    placeholder="Model"
                    label="Model"
                    options={[
                      { value: "C200", label: "C200" },
                      { value: "E220", label: "E220" },
                      { value: "S230", label: "S230" },
                    ]}
                    value={{
                      value:
                        values.vehicles[index].model !== null
                          ? values.vehicles[index].model
                          : "Model",
                      label:
                        values.vehicles[index].model !== null
                          ? values.vehicles[index].model
                          : "Model",
                    }}
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    isSearchable
                    isClearable
                    onChange={onSelectChange}
                    components={animatedComponents}
                  />
                </div>

                <div className="col-md-3">
                  <Select
                    name={yearId}
                    placeholder="Year"
                    label="Year"
                    options={[
                      { value: "2010", label: "2010" },
                      { value: "2011", label: "2011" },
                      { value: "2012", label: "2012" },
                    ]}
                    value={{
                      value:
                        values.vehicles[index].year !== null
                          ? values.vehicles[index].year
                          : "Year",
                      label:
                        values.vehicles[index].year !== null
                          ? values.vehicles[index].year
                          : "Year",
                    }}
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    isSearchable
                    isClearable
                    onChange={onSelectChange}
                    components={animatedComponents}
                  />
                </div>

                <div className="col-md-3">
                  <Select
                    name={variantId}
                    placeholder="Variant"
                    label="Variant"
                    options={[
                      { value: "AMG", label: "AMG" },
                      { value: "GTR", label: "GTR" },
                    ]}
                    value={{
                      value:
                        values.vehicles[index].variant !== null
                          ? values.vehicles[index].variant
                          : "Variant",
                      label:
                        values.vehicles[index].variant !== null
                          ? values.vehicles[index].variant
                          : "Variant",
                    }}
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    isSearchable
                    isClearable
                    onChange={onSelectChange}
                    components={animatedComponents}
                  />
                </div>
              </div>
            );
          })}
          <button
            className="text-primary bg-white my-3 mr-3"
            onClick={onAddVehicle}
          >
            Add another vehicle
          </button>
          {values.vehicles.length > 1 ? (
            <button
              className="text-danger bg-white my-3"
              onClick={onRemoveVehicle}
            >
              Remove vehicle
            </button>
          ) : (
            ""
          )}
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

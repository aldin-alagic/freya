import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import makeAnimated from "react-select/animated";
import Select from "react-select";

import { newSolutionUpdated } from "../../../../store/solutions";
import StepNavigator from "../StepNavigator/StepNavigator";
import { Options } from "./../options/Options";

import {
  transmissionOptions,
  fuelTypeOptions,
} from "../../../../utils/staticData";
import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";

export function Vehicle() {
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();

  const transmission = useSelector(
    (state) => state.entities.solutions.newSolution.transmission
  );
  const fuelType = useSelector(
    (state) => state.entities.solutions.newSolution.fuelType
  );
  const { brands, models, variants, years } = useSelector(
    (state) => state.vehicles
  );

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState,
    control,
    errors,
  } = useForm({ defaultValues: { transmission, fuelType } });

  const [vehicles, setVehicles] = useState([
    ...useSelector((state) => state.entities.solutions.newSolution.vehicles),
  ]);

  const onSubmit = (data) => {
    console.log(data);
    let newVehicles = [...vehicles];

    for (let i = 0; i < newVehicles.length; i++) {
      let years = data[`year-${i}`].map((year) => year.value);
      newVehicles[i] = {
        brand: data[`brand-${i}`].value,
        model: data[`model-${i}`].value,
        variant: data[`variant-${i}`] ? data[`variant-${i}`].value : null,
        years,
      };
    }

    dispatch(
      newSolutionUpdated({
        status: "process",
        step: 1,
        vehicles: newVehicles,
        transmission: data.transmission,
        fuelType: data.fuelType,
      })
    );
  };

  const handleVehiclesChange = (action) => {
    let newVehicles = [...vehicles];
    if (action === "ADD") {
      newVehicles.push({
        brand: null,
        model: null,
        year: null,
        variant: null,
      });
      setVehicles([...newVehicles]);
    } else if (action === "REMOVE" && vehicles.length > 1) {
      newVehicles.pop();
      setVehicles([...newVehicles]);
    }
  };

  !(Object.keys(formState.errors).length === 0) &&
    dispatch(
      newSolutionUpdated({
        status: "error",
      })
    );

  return (
    <form
      className="animate__animated animate__fadeIn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="card mb-4">
        <div className="card-header bg-light">Brand, Model, Variant</div>
        <div className="card-body pb-3">
          {vehicles.map((vehicle, index) => {
            let brandId = `brand-${index}`,
              modelId = `model-${index}`,
              yearId = `year-${index}`,
              variantId = `variant-${index}`;

            return (
              <div
                className="row animate__animated animate__fadeIn my-3"
                key={index}
              >
                <div className="col-md-3">
                  <Controller
                    control={control}
                    rules={{ required: FORM_REQUIRED_MESSAGE }}
                    name={brandId}
                    placeholder="Brand"
                    label="Brand"
                    options={brands}
                    defaultValue={
                      vehicle.brand !== null && {
                        value: vehicle.brand,
                        label: vehicle.brand,
                      }
                    }
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    isSearchable
                    isClearable
                    components={animatedComponents}
                    as={Select}
                  />
                  <div className="mt-2 text-danger">
                    {errors[brandId]?.message}
                  </div>
                </div>

                {(watch(brandId) || vehicle.brand) && (
                  <div className="col-md-3">
                    <Controller
                      control={control}
                      rules={{ required: FORM_REQUIRED_MESSAGE }}
                      name={modelId}
                      placeholder="Model"
                      label="Model"
                      options={
                        watch(brandId) && models[getValues(brandId).value]
                      }
                      defaultValue={
                        vehicle.model !== null && {
                          value: vehicle.model,
                          label: vehicle.model,
                        }
                      }
                      menuPortalTarget={document.body}
                      styles={{
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                      }}
                      isSearchable
                      isClearable
                      components={animatedComponents}
                      as={Select}
                    />
                    <div className="mt-2 text-danger">
                      {errors[modelId]?.message}
                    </div>
                  </div>
                )}

                {(watch(modelId) || vehicle.model) && (
                  <React.Fragment>
                    <div className="col-md-3">
                      <Controller
                        control={control}
                        rules={{ required: FORM_REQUIRED_MESSAGE }}
                        name={yearId}
                        placeholder="Years"
                        label="Years"
                        options={years}
                        defaultValue={
                          vehicle.years.length > 0
                            ? vehicle.years.map((year) => {
                                return { value: year, label: year };
                              })
                            : null
                        }
                        menuPortalTarget={document.body}
                        isMulti
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                        }}
                        isSearchable
                        isClearable
                        components={animatedComponents}
                        as={Select}
                      />
                      <div className="text-danger">
                        {errors[yearId]?.message}
                      </div>
                    </div>
                    <div className="col-md-3">
                      <Controller
                        control={control}
                        name={variantId}
                        placeholder="Variant"
                        label="Variant"
                        options={
                          watch(modelId) && variants[getValues(modelId).value]
                        }
                        defaultValue={
                          vehicle.variant !== null && {
                            value: vehicle.variant,
                            label: vehicle.variant,
                          }
                        }
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                        }}
                        isSearchable
                        isClearable
                        components={animatedComponents}
                        as={Select}
                      />
                      <div className="text-danger">
                        {errors[variantId]?.message}
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </div>
            );
          })}
          <button
            type="button"
            className="text-primary bg-white mb-2 mr-3"
            onClick={() => handleVehiclesChange("ADD")}
          >
            Add another vehicle
          </button>
          {vehicles.length > 1 && (
            <button
              type="button"
              className="text-danger bg-white mb-2"
              onClick={() => handleVehiclesChange("REMOVE")}
            >
              Remove vehicle
            </button>
          )}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-light">Fuel type</div>
        <div className="card-body row justify-content-start px-5 pb-2">
          <Options
            type="fuelType"
            options={fuelTypeOptions}
            register={register({
              required: FORM_REQUIRED_MESSAGE,
            })}
          />
        </div>
        <div className="ml-5 mb-2 text-danger">{errors.fuelType?.message}</div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-light">Transmission</div>
        <div className="card-body row justify-content-around px-5 pb-2">
          <Options
            type="transmission"
            options={transmissionOptions}
            register={register({
              required: FORM_REQUIRED_MESSAGE,
            })}
          />
        </div>
        <div className="ml-5 mb-2 text-danger">
          {errors.transmission?.message}
        </div>
      </div>
      <StepNavigator currentStep={0} onNextStepClick={handleSubmit(onSubmit)} />
    </form>
  );
}

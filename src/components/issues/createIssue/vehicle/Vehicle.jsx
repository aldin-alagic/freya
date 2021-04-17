import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import makeAnimated from "react-select/animated";
import Select from "react-select";

import { newIssueUpdated } from "../../../../store/issues";
import StepNavigator from "../StepNavigator/StepNavigator";
import { Options } from "../../../common/options/Options";

import {
  transmissionOptions,
  fuelTypeOptions,
} from "../../../../utils/staticData";
import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";
import "./Vehicle.css";

export function Vehicle() {
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();

  const { vehicles, fuelType, transmission } = useSelector(
    (state) => state.entities.solutions.solution.vehicle
  );
  const { brands, models, variants, years } = useSelector(
    (state) => state.vehicles
  );
  const [formVehicles, setFormVehicles] = useState([...vehicles]);

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState,
    control,
    errors,
  } = useForm({ defaultValues: { transmission, fuelType } });

  const onSubmit = (data) => {
    console.log(data);
    let newVehicles = [...formVehicles].map((vehicle, index) => {
      let years = data[`year-${index}`].map((year) => year.value);
      return {
        brand: data[`brand-${index}`].value,
        model: data[`model-${index}`].value,
        variant: data[`variant-${index}`]
          ? data[`variant-${index}`].value
          : null,
        years,
      };
    });
    let vehicle = {
      step: 1,
      status: "process",
      vehicle: {
        vehicles: newVehicles,
        transmission: data.transmission,
        fuelType: data.fuelType,
      },
    };
    dispatch(newIssueUpdated(vehicle));
  };

  const handleVehiclesChange = (action) => {
    let newVehicles = [...formVehicles];
    if (action === "ADD") {
      newVehicles.push({
        brand: null,
        model: null,
        year: null,
        variant: null,
      });
      setFormVehicles([...newVehicles]);
    } else if (action === "REMOVE" && newVehicles.length > 1) {
      newVehicles.pop();
      setFormVehicles([...newVehicles]);
    }
  };

  !(Object.keys(formState.errors).length === 0) &&
    dispatch(
      newIssueUpdated({
        status: "error",
      })
    );

  return (
    <form
      className="animate__animated animate__fadeIn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="card mb-4">
        <div className="card-header bg-light">Vehicle type</div>
        <div className="card-body pb-3">
          <CSSTransitionGroup
            transitionName={{
              appear: "animate__animated",
              appearActive: "animate__fadeInRight",
              enter: "animate__animated",
              enterActive: "animate__fadeInRight",
              leave: "animate__animated",
              leaveActive: "animate__fadeOut",
            }}
            transitionEnterTimeout={0}
            transitionAppearTimeout={0}
            transitionLeaveTimeout={0}
          >
            {formVehicles.map((vehicle, index) => {
              let brandId = `brand-${index}`,
                modelId = `model-${index}`,
                yearId = `year-${index}`,
                variantId = `variant-${index}`;

              return (
                <div
                  className="row animate__animated animate__fadeIn mb-2"
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
                            vehicle.years
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
          </CSSTransitionGroup>
          <button
            type="button"
            className="change-vehicles-btn text-primary bg-white mb-2 mr-3"
            onClick={() => handleVehiclesChange("ADD")}
          >
            Add another vehicle
          </button>
          {formVehicles.length > 1 && (
            <button
              type="button"
              className="change-vehicles-btn text-danger bg-white mb-2"
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

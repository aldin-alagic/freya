import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import { newSolutionUpdated } from "../../../../store/solutions";
import StepNavigator from "../StepNavigator/StepNavigator";

import "./Offers.css";
import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";

export function Offers() {
  const { standard, premium } = useSelector(
    (state) => state.entities.solutions.newSolution.offers
  );

  const [formData, setFormData] = useState({
    standard: standard.options ? [...standard.options] : [],
    premium: premium.options ? [...premium.options] : [],
  });

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState,
    errors,
  } = useForm({
    defaultValues: {
      standardPrice: standard.price,
      premiumPrice: premium.price,
      assistanceMinutes: premium.assistanceMinutes,
    },
  });

  const handleOptionsClick = (action, offerType, deletedOption = "") => {
    let newFormData = {
      standard: [...formData.standard],
      premium: [...formData.premium],
    };

    if (action === "ADD") {
      let option = getValues(offerType);
      if (option !== "" && !formData[offerType].includes(option)) {
        newFormData[offerType].push(option);
      }
      setValue(offerType, "");
    } else if (action === "REMOVE") {
      newFormData[offerType] = newFormData[offerType].filter(
        (option) => option !== deletedOption
      );
    }

    setFormData(newFormData);
  };

  const onSubmit = (data) => {
    console.log(data);
    const newOffers = {
      standard: {
        price: parseInt(data.standardPrice),
        options: formData.standard,
      },
      premium: {
        price: parseInt(data.premiumPrice),
        options: formData.premium,
        assistanceMinutes: parseInt(data.assistanceMinutes),
      },
    };

    dispatch(
      newSolutionUpdated({
        offers: newOffers,
        status: "process",
        step: 5,
      })
    );
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
      <div className="row mb-4">
        <div className="col-6">
          <div className="card h-100">
            <div className="card-header bg-light">Standard offer</div>
            <div className="card-body d-flex align-content-start px-4 pb-2">
              <div className="w-50">
                <p className="text-dark font-weight-bold w-100 mb-0">
                  Standard package includes:
                </p>
                <ul className="options-list mb-2">
                  {formData.standard.map((option, index) => (
                    <li key={index}>
                      <FontAwesomeIcon
                        className="text-success mr-2"
                        icon={faCheck}
                      />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="form-group w-50">
                <label
                  className="text-dark font-weight-bold"
                  htmlFor="standardPrice"
                >
                  Standard package price
                </label>
                <input
                  name="standardPrice"
                  id="standardPrice"
                  placeholder="Enter number of tokens"
                  className="form-control"
                  type="number"
                  ref={register({
                    required: FORM_REQUIRED_MESSAGE,
                  })}
                />
                <div className="ml-1 my-2 text-danger">
                  {errors.standardPrice?.message}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card h-100">
            <div className="card-header bg-light">Premium offer</div>
            <div className="card-body d-flex flex-column px-4 pb-2">
              <p className="text-dark font-weight-bold w-100 mb-0">
                Premium package includes:
              </p>
              <CSSTransitionGroup
                component="ul"
                className="options-list mb-2"
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
                {formData.premium.map((option, index) => (
                  <li key={option}>
                    <FontAwesomeIcon
                      className="text-success mr-2"
                      icon={faCheck}
                    />
                    {option}
                    {index > 2 && (
                      <button className="remove-option-btn ml-2" type="button">
                        <FontAwesomeIcon
                          icon={faTimes}
                          onClick={() =>
                            handleOptionsClick("REMOVE", "premium", option)
                          }
                        />
                      </button>
                    )}
                  </li>
                ))}
              </CSSTransitionGroup>
              <div className="input-group height-fit-content mb-4">
                <input
                  name="premium"
                  id="premium"
                  placeholder="Add a package option"
                  className="form-control"
                  type="text"
                  ref={register}
                />
                <div className="input-group-append">
                  <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faPlus}
                      size="lg"
                      onClick={() => handleOptionsClick("ADD", "premium")}
                    />
                  </button>
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group w-50 mr-3">
                  <label
                    className="text-dark font-weight-bold"
                    htmlFor="premiumPrice"
                  >
                    Premium package price
                  </label>
                  <input
                    name="premiumPrice"
                    id="premiumPrice"
                    placeholder="Enter number of tokens"
                    className="form-control"
                    type="number"
                    ref={register({
                      required: FORM_REQUIRED_MESSAGE,
                    })}
                  />
                  <div className="ml-1 my-2 text-danger">
                    {errors.premiumPrice?.message}
                  </div>
                </div>
                <div className="form-group w-50">
                  <label
                    className="text-dark font-weight-bold"
                    htmlFor="assistanceMinutes"
                  >
                    Included assistance minutes
                  </label>
                  <input
                    name="assistanceMinutes"
                    id="assistanceMinutes"
                    placeholder="Enter number of minutes"
                    className="form-control"
                    type="number"
                    ref={register({
                      required: FORM_REQUIRED_MESSAGE,
                    })}
                  />
                  <div className="ml-1 my-2 text-danger">
                    {errors.assistanceMinutes?.message}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StepNavigator currentStep={4} onNextStepClick={handleSubmit(onSubmit)} />
    </form>
  );
}

// VIDI KOMPONENTE GENRIČKE, MOŽDA OFFER CARD?

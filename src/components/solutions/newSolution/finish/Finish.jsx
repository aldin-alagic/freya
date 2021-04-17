import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { CSSTransitionGroup } from "react-transition-group";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { InputGroup } from "./../../../common/formNew/inputGroup/InputGroup";
import { Input } from "../../../common/formNew/input/Input";
import { Items } from "../items/Items";
import StepNavigator from "./../StepNavigator/StepNavigator";
import { Options } from "../../../common/options/Options";
import {
  createSolution,
  newSolutionUpdated,
} from "../../../../store/solutions";

import {
  advertiseOptions,
  standardPackageOptions,
} from "../../../../utils/staticData";
import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";
import "./Finish.css";

export function Finish() {
  let history = useHistory();
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();

  const wallet = useSelector((state) => state.auth.user.wallet);
  const { keywords, packages, visibility, advertisements } = useSelector(
    (state) => state.entities.solutions.solution.finish
  );

  const schema = yup.object().shape({
    wallet: yup.number(),
    price: yup
      .number()
      .required(FORM_REQUIRED_MESSAGE)
      .min(1, "Only positive values are allowed"),
    positionAdvertisements: yup.object().required(FORM_REQUIRED_MESSAGE),
    notificationAdvertisements: yup.object().required(FORM_REQUIRED_MESSAGE),
    tokens: yup
      .number()
      .max(wallet, "You don't have enough tokens in your wallet"),
  });

  const {
    register,
    control,
    errors,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      visibility,
      price: packages.standard.price,
    },
  });

  const [formData, setFormData] = useState({
    offerOptions: packages.standard.options,
    keywords,
  });

  const handleOptionsClick = (action, deletedOption = "") => {
    const newFormData = {
      keywords: [...formData.keywords],
      offerOptions: [...formData.offerOptions],
    };

    if (action === "ADD") {
      const option = getValues("offerOptions");
      if (option !== "" && !formData.offerOptions.includes(option))
        newFormData.offerOptions.push(option);
      setValue("offerOptions", "");
    } else if (action === "REMOVE") {
      newFormData.offerOptions = newFormData.offerOptions.filter(
        (option) => option !== deletedOption
      );
    }

    setFormData(newFormData);
  };

  const handleItemsClick = (action, itemType, deletedItem = "") => {
    const newFormData = {
      keywords: [...formData.keywords],
      offerOptions: [...formData.offerOptions],
    };

    if (action === "ADD") {
      const item = getValues(itemType);
      if (item !== "" && !formData[itemType].includes(item))
        newFormData[itemType].push(item);
      setValue(itemType, "");
    } else if (action === "REMOVE") {
      newFormData[itemType] = newFormData[itemType].filter(
        (item) => item !== deletedItem
      );
    }
    setFormData(newFormData);
  };

  const onSubmit = ({
    visibility,
    positionAdvertisements,
    notificationAdvertisements,
    price,
  }) => {
    const { offerOptions, keywords } = formData;
    const advertisements = {
      position: positionAdvertisements.value,
      notifications: notificationAdvertisements.value,
    };
    const packages = {
      standard: { price: parseInt(price), options: offerOptions },
    };
    const finish = {
      step: 4,
      status: "process",
      finish: {
        keywords,
        visibility,
        packages,
        advertisements,
      },
    };

    dispatch(newSolutionUpdated(finish));
    dispatch(createSolution());
    history.push("/solutions/basic");
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
        <div className="card-header">Keywords</div>
        <div className="card-body p-4">
          <div className="w-50">
            <Items
              name="keywords"
              placeholder="Enter e keyword related to your solution"
              type="text"
              items={formData.keywords}
              register={register}
              onItemsClick={handleItemsClick}
            />
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">Visibility</div>
        <div className="card-body p-4">
          <div className="alert alert-warning mb-0">
            <h4 className="alert-heading">
              <FontAwesomeIcon icon={faExclamationCircle} /> Warning
            </h4>
            <hr className="my-1" />
            <p className="text-justify mb-0">
              Once the solution is
              <span className="font-weight-bold"> public </span>and then
              <span className="font-weight-bold"> purchased</span>, you will
              only be able to edit the solution note and add new solution
              attachments. We highly recommend that you review your solution
              multiple times before making it visible to all the users.
            </p>
          </div>
          <div className="row w-50">
            <Options
              type="visibility"
              options={["Public", "Private"]}
              register={register({
                required: FORM_REQUIRED_MESSAGE,
              })}
            />
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">Offer</div>
        <div className="card-body px-4 pb-0">
          <div className="w-25 mr-5">
            <Input
              name="price"
              type="number"
              label="Offer price"
              placeholder="Enter number of tokens"
              register={register}
              style="form-group"
              errors={errors.price?.message}
            />
          </div>

          <div className="w-50">
            <p className="text-dark font-weight-bold w-50 mb-0">
              Offer includes:
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
              {standardPackageOptions.map((option) => (
                <li key={option}>
                  <FontAwesomeIcon
                    className="text-success mr-2"
                    icon={faCheck}
                  />
                  {option}
                </li>
              ))}
              {formData.offerOptions.map((option) => (
                <li key={option}>
                  <FontAwesomeIcon
                    className="text-success mr-2"
                    icon={faCheck}
                  />
                  {option}
                  <button className="remove-option-btn ml-2" type="button">
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={() => handleOptionsClick("REMOVE", option)}
                    />
                  </button>
                </li>
              ))}
            </CSSTransitionGroup>
            <InputGroup
              name="offerOptions"
              type="text"
              placeholder="Add a offer option"
              register={register}
              onClick={handleOptionsClick}
              style="input-group height-fit-content mb-4"
            />
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          Find a client for your solution faster
        </div>
        <div className="card-body p-4">
          <div className="d-flex w-100">
            <div className="w-50 mr-4">
              <Controller
                control={control}
                name="positionAdvertisements"
                render={({ onChange, onBlur, value }) => (
                  <Select
                    placeholder="Position advertisements"
                    options={advertiseOptions.position}
                    defaultValue={advertisements.position}
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    isSearchable
                    components={animatedComponents}
                    onChange={(e) => {
                      setValue(
                        "tokens",
                        parseInt(e.value) +
                          parseInt(
                            watch("notificationAdvertisements")
                              ? getValues("notificationAdvertisements").value
                              : 0
                          )
                      );
                      onChange(e);
                    }}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              <div className="mt-2 text-danger">
                {errors.positionAdvertisements?.message}
              </div>
            </div>
            <div className="w-50">
              <Controller
                control={control}
                name="notificationAdvertisements"
                render={({ onChange, onBlur, value }) => (
                  <Select
                    placeholder="Notification advertisements"
                    options={advertiseOptions.notifications}
                    defaultValue={advertisements.notifications}
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    isSearchable
                    components={animatedComponents}
                    onChange={(e) => {
                      setValue(
                        "tokens",
                        parseInt(e.value) +
                          parseInt(
                            watch("positionAdvertisements")
                              ? getValues("positionAdvertisements").value
                              : 0
                          )
                      );
                      onChange(e);
                    }}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              <div className="mt-2 text-danger">
                {errors.notificationAdvertisements?.message}
              </div>
            </div>
          </div>
          <hr className="my-2 w-100" />
          <div className="w-100">
            <div>
              <span className="font-weight-bold">My wallet: </span>
              <input
                className="tokens-input border-0"
                name="wallet"
                type="number"
                readOnly
                ref={register}
                defaultValue={wallet}
              />
            </div>
            <div>
              <span className="font-weight-bold">Amount for the charge:</span>
              <input
                className="tokens-input border-0"
                name="tokens"
                type="number"
                readOnly
                ref={register}
                defaultValue={0}
              />
              {getValues("tokens") > wallet && (
                <div className="mt-2 text-danger">
                  You don't have enough tokens in your wallet <Link className="get-tokens-btn ml-2" to="#">Get tokens</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <StepNavigator currentStep={4} onNextStepClick={handleSubmit(onSubmit)} />
    </form>
  );
}

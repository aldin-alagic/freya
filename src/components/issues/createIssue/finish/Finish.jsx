import React, { useState } from "react";
import { useHistory } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

import { Items } from "../items/Items";
import StepNavigator from "./../StepNavigator/StepNavigator";
import { Options } from "../../../common/options/Options";
import {
  createIssue,
  newIssueUpdated,
} from "../../../../store/issues";

import {
  advertiseOptions,
} from "../../../../utils/staticData";
import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";

export function Finish() {
  let history = useHistory();
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();

  const wallet = useSelector((state) => state.auth.user.wallet);
  const { keywords, packages, visibility, advertisements } = useSelector(
    (state) => state.entities.solutions.solution.finish
  );

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
    defaultValues: {
      visibility,
      price: packages.standard.price,
    },
  });

  const [formData, setFormData] = useState({
    offerOptions: packages.standard.options,
    keywords,
  });

  const getTotal = () => {
    const positionCharge = getValues("positionAdvertisements")
      ? getValues("positionAdvertisements").value
      : 0;
    const notificationsCharge = getValues("notificationAdvertisements")
      ? getValues("notificationAdvertisements").value
      : 0;
    return ` ${positionCharge + notificationsCharge} tokens`;
  };


  const handleItemsClick = (action, itemType, deletedItem = "") => {
    const newFormData = {
      keywords: [...formData.keywords],
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
    const { keywords } = formData;
    const advertisements = {
      position: positionAdvertisements.value,
      notifications: notificationAdvertisements.value,
    };
    const finish = {
      step: 3,
      status: "process",
      finish: {
        keywords,
        visibility,
        advertisements,
      },
    };

    dispatch(newIssueUpdated(finish));
    dispatch(createIssue());
    history.push("/issues");
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
        <div className="card-header">Keywords</div>
        <div className="card-body p-4">
          <div className="w-50">
            <Items
              name="keywords"
              placeholder="Enter a keyword related to your issue"
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
              Once you <span className="font-weight-bold"> accept </span>
              an offer for this issue, you will only be able to edit the note
              and/or add new attachments. We highly recommend that you review your issue
              multiple times before making it visible to all users.
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
        <div className="card-header">
          Find a client for your issue faster
        </div>
        <div className="card-body p-4">
          <div className="d-flex w-100">
            <div className="w-50 mr-4">
              <Controller
                control={control}
                rules={{ required: FORM_REQUIRED_MESSAGE }}
                name="positionAdvertisements"
                placeholder="Position advertisements"
                options={advertiseOptions.position}
                defaultValue={advertisements.position}
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
                {errors.positionAdvertisements?.message}
              </div>
            </div>
            <div className="w-50">
              <Controller
                control={control}
                rules={{ required: FORM_REQUIRED_MESSAGE }}
                name="notificationAdvertisements"
                placeholder="Notification advertisements"
                options={advertiseOptions.notifications}
                defaultValue={advertisements.notifications}
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
                {errors.notificationAdvertisements?.message}
              </div>
            </div>
          </div>
          <hr className="my-2 w-100" />
          <div className="w-100">
            <div>
              <span className="font-weight-bold">My wallet: </span>
              {`${wallet} tokens`}
            </div>
            <div>
              <span className="font-weight-bold">Amount for the charge:</span>
              {watch("positionAdvertisements") ||
              watch("notificationAdvertisements")
                ? getTotal()
                : " 0 tokens"}
            </div>
          </div>
        </div>
      </div>

      <StepNavigator currentStep={4} onNextStepClick={handleSubmit(onSubmit)} />
    </form>
  );
}

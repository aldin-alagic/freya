import React from "react";
import { useHistory } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import { createIssue, newIssueUpdated } from "../../../../store/issues";
import StepNavigator from "./../StepNavigator/StepNavigator";

import { advertiseOptions } from "../../../../utils/staticData";
import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";

export function Finish() {
  let history = useHistory();
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();

  const visibility = useSelector(
    (state) => state.entities.issues.newIssue.visibility
  );
  const note = useSelector((state) => state.entities.issues.newIssue.note);
  const advertisements = useSelector(
    (state) => state.entities.issues.newIssue.advertisements
  );

  const { register, control, errors, handleSubmit, watch, getValues } = useForm(
    {
      defaultValues: { visibility, note },
    }
  );

  const onSubmit = (data) => {
    console.log(data);
    let newAdvertisements = {
      position: data.positionAdvertisements,
      notifications: data.notificationAdvertisements,
    };

    dispatch(
      newIssueUpdated({
        advertisements: newAdvertisements,
        visibility: data.visibility,
        note: data.note,
      })
    );
    dispatch(createIssue());
    history.push("/issues");
  };

  const getTotal = () => {
    const positionCharge = getValues("positionAdvertisements")
      ? getValues("positionAdvertisements").value
      : 0;
    const notificationsCharge = getValues("notificationAdvertisements")
      ? getValues("notificationAdvertisements").value
      : 0;
    return ` ${positionCharge + notificationsCharge} tokens`;
  };

  return (
    <form
      className="animate__animated animate__fadeIn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="card mb-4">
        <div className="card-header bg-light">Finish</div>
        <div className="card-body row px-5 mb-3">
          <div className="material-switch mt-2 mb-2">
            <span className="text-dark font-weight-bold mr-3">Visible</span>
            <input
              type="checkbox"
              className="custom-control-input"
              name="visibility"
              id="visibility"
              ref={register}
            />
            <label className="bg-primary" htmlFor="visibility"></label>
          </div>
          <div className="alert alert-warning mb-3">
            <h4 className="alert-heading">
              <FontAwesomeIcon icon={faExclamationCircle} /> Warning
            </h4>
            <hr className="my-2" />
            <p className="text-justify">
              Once the issue is
              <span className="font-weight-bold"> visible </span>and
              <span className="font-weight-bold"> purchased</span>, you will
              only be able to edit the issue note and add new attachments. We
              highly recommend that you review your issue multiple times before
              making it visible to all the users.
            </p>
          </div>
          <div className="form-group w-100 mb-3">
            <label htmlFor="note" className="text-dark font-weight-bold">
              Note for the client
            </label>
            <textarea
              id="note"
              name="note"
              rows={4}
              className="form-control"
              ref={register}
            />
          </div>
          <label
            htmlFor="positionAdvertisements"
            className="text-dark font-weight-bold"
          >
            Optional advertisement options
          </label>
          <div className="d-flex w-100 mb-3">
            <div className="w-50 mr-5">
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
          <hr className="mt-0 mb-2 w-100" />
          <div className="w-100">
            <div>
              <span className="font-weight-bold">My wallet:</span> 400 tokens
            </div>
            <div>
              <span className="font-weight-bold"> Amount for the charge:</span>
              {watch("positionAdvertisements") &&
              watch("notificationAdvertisements")
                ? getTotal()
                : " 0 tokens"}
            </div>
          </div>
        </div>
      </div>
      <StepNavigator currentStep={5} onNextStepClick={handleSubmit(onSubmit)} />
    </form>
  );
}

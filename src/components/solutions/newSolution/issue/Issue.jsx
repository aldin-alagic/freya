import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { newSolutionUpdated } from "../../../../store/solutions";
import { Options } from "../../../common/options/Options";
import { TextArea } from "./../../../common/formNew/textArea/TextArea";
import Attachments from "../attachments/Attachments";
import StepNavigator from "../StepNavigator/StepNavigator";
import { Items } from "./../items/Items";

import { issueTypes, issueTypeOptions } from "../../../../utils/staticData";
import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";
import "./Issue.css";

export function Issue() {
  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();

  const { type, option, codes, description, attachments } = useSelector(
    (state) => state.entities.solutions.solution.issue
  );

  const [formCodes, setFormCodes] = useState(codes ? [...codes] : []);

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    watch,
    formState,
    errors,
    control,
  } = useForm({
    defaultValues: {
      issueTypeOption: option,
      issueDescription: description,
    },
  });

  const handleCodesClick = (action, itemType, deletedItem = "") => {
    let newFormCodes = [...formCodes];
    if (action === "ADD") {
      const item = getValues(itemType);
      if (item !== "" && !formCodes.includes(item))
      newFormCodes.push(item);
      setValue(itemType, "");
    } else if (action === "REMOVE") {
      newFormCodes = newFormCodes.filter(
        (item) => item !== deletedItem
      );
    }
    setFormCodes(newFormCodes);
  };

  const onSubmit = ({
    issueType,
    issueTypeOption,
    issueDescription,
  }) => {
    const issue = {
      step: 2,
      status: "process",
      issue: {
        type: issueType.value,
        option: issueTypeOption,
        codes: formCodes,
        description: issueDescription,
      },
    };
    dispatch(newSolutionUpdated(issue));
  };

  !(Object.keys(formState.errors).length === 0) &&
    dispatch(
      newSolutionUpdated({
        status: "error",
      })
    );

  const renderOptions = (watch("issueType") || type) && (
    <React.Fragment>
      <div className="w-100 row">
        <Options
          type="issueTypeOption"
          options={
            issueTypeOptions[
              getValues("issueType") ? getValues("issueType").value : type
            ]
          }
          register={register({
            required: FORM_REQUIRED_MESSAGE,
          })}
        />
      </div>
      <div className="ml-2 text-danger">{errors.issueTypeOption?.message}</div>
    </React.Fragment>
  );

  return (
    <form
      className="animate__animated animate__fadeIn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="card mb-4">
        <div className="card-header">Issue type</div>
        <div className="card-body p-4">
          <div className="issue-type">
            <Controller
              control={control}
              rules={{ required: FORM_REQUIRED_MESSAGE }}
              name="issueType"
              placeholder="Select an issue type"
              label="Select an issue type"
              options={issueTypes}
              defaultValue={type ? { value: type, label: type } : null}
              menuPortalTarget={document.body}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              }}
              isSearchable
              isClearable
              components={animatedComponents}
              as={Select}
            />
            {errors.issueType && (
              <div className="text-danger d mt-2">
                {errors.issueType.message}
              </div>
            )}
          </div>
          {renderOptions}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">Issue codes</div>
        <div className="card-body p-4">
          <Items
            name="issueCode"
            type="text"
            placeholder="Enter warning or error code if applicable"
            items={formCodes}
            register={register}
            onItemsClick={handleCodesClick}
          />
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">Issue description</div>
        <div className="card-body p-4">
          <TextArea
            name="issueDescription"
            placeholder="Describe the issue that your solution solves..."
            register={register({
              required: FORM_REQUIRED_MESSAGE,
            })}
            errors={errors}
          />
        </div>
      </div>

      <Attachments
        type="issue"
        title="Issue attachments"
        attachments={attachments}
      />

      <StepNavigator currentStep={1} onNextStepClick={handleSubmit(onSubmit)} />
    </form>
  );
}

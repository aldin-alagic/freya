import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { newIssueUpdated } from "../../../../store/issues";
import { Options } from "../../../common/options/Options";
import { TextArea } from "./../../../common/formNew/textArea/TextArea";
import Attachments from "../attachments/Attachments";
import StepNavigator from "../StepNavigator/StepNavigator";
import { Input } from "../../../common/formNew/input/Input";


import { issueTypes, issueTypeOptions } from "../../../../utils/staticData";
import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";
import "./Issue.css";

export function Issue() {
  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();

  const { title, type, option, code, description, attachments } = useSelector(
    (state) => state.entities.issues.issue.issue
  );

  const {
    register,
    getValues,
    handleSubmit,
    watch,
    formState,
    errors,
    control,
  } = useForm({
      defaultValues: { solutionTitle: title, issueTypeOption: option, issueCode: code, issueDescription: description },
  });

  const onSubmit = ({ issueTitle, issueType, issueTypeOption, issueCode, issueDescription }) => {
    const issue = {
      step: 2,
      status: "process",
      issue: {
        title: issueTitle,
        type: issueType.value,
        code: issueCode,
        option: issueTypeOption,
        description: issueDescription,
      },
    };
    dispatch(newIssueUpdated(issue));
  };

  !(Object.keys(formState.errors).length === 0) &&
    dispatch(
      newIssueUpdated({
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
        <div className="card-header">Issue title</div>
        <div className="card-body p-4">
          <Input
            name="issueTitle"
            type="text"
            placeholder="Enter solution title"
            register={register({
              required: FORM_REQUIRED_MESSAGE,
            })}
            errors={errors.issueTitle?.message}
          />
        </div>
      </div>

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
        <div className="card-header">Issue code</div>
        <div className="card-body p-4">
          <Input
            name="issueCode"
            type="text"
            placeholder="Enter issue code if applicable"
            register={register({
              max: 12,
            })}
            style=""
            errors={
              errors.issueCode?.type === "max"
                ? "Maximum of 12 characters are allowed"
                : errors.issueCode?.message
            }
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

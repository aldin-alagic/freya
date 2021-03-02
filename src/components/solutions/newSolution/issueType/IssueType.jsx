import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { newSolutionUpdated } from "../../../../store/solutions";
import { IssueTypeMenu } from "../issueTypeMenu/IssueTypeMenu";
import StepNavigator from "./../StepNavigator/StepNavigator";
import { Options } from "../../../common/options/Options";

import { issueTypes } from "../../../../utils/staticData";
import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";

export function IssueType() {
  const issueTypeOption = useSelector(
    (state) => state.entities.solutions.newSolution.issueTypeOption
  );

  const dispatch = useDispatch();
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    formState,
    errors,
  } = useForm({
    defaultValues: { issueTypeOption },
  });

  const [issueTypeCategory, setIssueTypeCategory] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      newSolutionUpdated({
        status: "process",
        step: 2,
        issueTypeOption: data.issueTypeOption,
      })
    );
  };

  const showIssueTypeCategory = issueTypeCategory !== -1 && (
    <div className="card mb-4">
      <div className="card-header bg-light">
        {issueTypes[issueTypeCategory].title}
      </div>
      <div className="card-body row px-5 pb-2">
        <Options
          type="issueTypeOption"
          options={issueTypes[issueTypeCategory].options}
          register={register({
            required: FORM_REQUIRED_MESSAGE,
          })}
        />
        <div className="ml-4 mb-2 text-danger">
          {errors.issueTypeOption?.message}
        </div>
      </div>
    </div>
  );

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
      <IssueTypeMenu
        unregister={unregister}
        onClick={setIssueTypeCategory}
        active={issueTypeCategory}
      />

      <hr className="mt-3 mb-4" />
      <div className="mb-3">
        Selected issue:
        {watch("issueTypeOption") !== null ? (
          <span className="text-primary ml-2">{watch("issueTypeOption")}</span>
        ) : (
          <span className="text-danger ml-2">None</span>
        )}
      </div>
      {showIssueTypeCategory}
      <StepNavigator currentStep={1} onNextStepClick={handleSubmit(onSubmit)} />
    </form>
  );
}

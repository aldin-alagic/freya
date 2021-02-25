import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { newIssueUpdated } from "../../../../store/issues";
import { Items } from "./items/Items";
import StepNavigator from "./../StepNavigator/StepNavigator";

import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";

export function Description() {
  const {
    title,
    shortDescription,
    detailedDescription,
    keywords,
  } = useSelector((state) => state.entities.issues.newIssue.description);

  const [formKeywords, setFormKeywords] = useState(
    keywords ? [...keywords] : []
  );

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState,
    errors,
  } = useForm({
    defaultValues: { title, shortDescription, detailedDescription },
  });

  const onSubmit = (data) => {
    console.log(data);
    let description = {
      title: data.title,
      shortDescription: data.shortDescription,
      detailedDescription: data.detailedDescription,
      keywords: formKeywords,
    };
    console.log("description", description);
    dispatch(
      newIssueUpdated({
        status: "process",
        step: 3,
        description,
      })
    );
  };

  const handleKeywordClick = (action, keywordsInput, deletedKeyword = "") => {
    let newFormKeywords = [...formKeywords];

    if (action === "ADD") {
      let keyword = getValues(keywordsInput);
      if (keyword !== "" && !newFormKeywords.includes(keyword))
        newFormKeywords.push(keyword);
      setValue(keywordsInput, "");
    } else if (action === "REMOVE") {
      newFormKeywords = newFormKeywords.filter(
        (keyword) => keyword !== deletedKeyword
      );
    }
    setFormKeywords(newFormKeywords);
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
        <div className="card-header bg-light">Description</div>
        <div className="card-body row px-5 pt-4 pb-2">
          <div className="form-group row mx-0 px-0 mb-3 col-12">
            <label htmlFor="title" className="text-dark font-weight-bold">
              Issue title
            </label>
            <textarea
              id="title"
              name="title"
              rows={4}
              className="form-control"
              ref={register({
                required: FORM_REQUIRED_MESSAGE,
              })}
            />
            <div className="ml-1 my-2 text-danger">{errors.title?.message}</div>
          </div>

          <div className="form-group row mx-0 px-0 mb-3 col-12">
            <label
              htmlFor="shortDescription"
              className="text-dark font-weight-bold"
            >
              Short issue description (visible to everyone)
            </label>
            <textarea
              id="shortDescription"
              name="shortDescription"
              rows={4}
              className="form-control"
              ref={register({
                required: FORM_REQUIRED_MESSAGE,
              })}
            />
            <div className="ml-1 my-2 text-danger">
              {errors.shortDescription?.message}
            </div>
          </div>

          <div className="form-group row mx-0 px-0 mb-3 col-12">
            <label
              htmlFor="detailedDescription"
              className="text-dark font-weight-bold"
            >
              Detailed issue description (visible when purchased)
            </label>
            <textarea
              id="detailedDescription"
              name="detailedDescription"
              rows={4}
              className="form-control"
              ref={register({
                required: FORM_REQUIRED_MESSAGE,
              })}
            />
            <div className="ml-1 my-2 text-danger">
              {errors.detailedDescription?.message}
            </div>
          </div>
          <div className="w-50 pr-4">
            <Items
              name="keywords"
              label="Keywords"
              items={formKeywords}
              register={register}
              onItemsClick={handleKeywordClick}
            />
          </div>
        </div>
      </div>

      <StepNavigator currentStep={2} onNextStepClick={handleSubmit(onSubmit)} />
    </form>
  );
}

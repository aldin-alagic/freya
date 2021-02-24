import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { newSolutionUpdated } from "../../../../store/solutions";
import { Items } from "./items/Items";
import StepNavigator from "./../StepNavigator/StepNavigator";

import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";

export function Description() {
  const {
    title,
    shortDescription,
    detailedDescription,
    parts,
    tools,
    keywords,
  } = useSelector((state) => state.entities.solutions.newSolution.description);

  const [formData, setFormData] = useState({
    parts: parts ? [...parts] : [],
    tools: tools ? [...tools] : [],
    keywords: keywords ? [...keywords] : [],
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
    defaultValues: { title, shortDescription, detailedDescription },
  });

  const onSubmit = (data) => {
    console.log(data);
    let description = {
      title: data.title,
      shortDescription: data.shortDescription,
      detailedDescription: data.detailedDescription,
      parts: formData.parts,
      tools: formData.tools,
      keywords: formData.keywords,
    };
    console.log("description", description);
    dispatch(
      newSolutionUpdated({
        status: "process",
        step: 3,
        description,
      })
    );
  };

  const handleItemsClick = (action, itemType, deletedItem = "") => {
    let newFormData = {
      parts: [...formData.parts],
      tools: [...formData.tools],
      keywords: [...formData.keywords],
    };

    if (action === "ADD") {
      let item = getValues(itemType);
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
        <div className="card-header bg-light">Description</div>
        <div className="card-body row px-5 pt-4 pb-2">
          <div className="form-group row mx-0 px-0 mb-3 col-12">
            <label htmlFor="title" className="text-dark font-weight-bold">
              Solution title
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
              Short solution description (visible to everyone)
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
              Detailed solution description (visible when purchased)
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
          <div className="d-flex justify-content-between w-100">
            <div className="w-50 mr-5">
              <Items
                name="parts"
                label="Required parts"
                items={formData.parts}
                register={register}
                onItemsClick={handleItemsClick}
              />
            </div>
            <div className="w-50">
              <Items
                name="tools"
                label="Required tools"
                items={formData.tools}
                register={register}
                onItemsClick={handleItemsClick}
              />
            </div>
          </div>
          <div className="w-50 pr-4">
            <Items
              name="keywords"
              label="Keywords"
              items={formData.keywords}
              register={register}
              onItemsClick={handleItemsClick}
            />
          </div>
        </div>
      </div>

      <StepNavigator currentStep={2} onNextStepClick={handleSubmit(onSubmit)} />
    </form>
  );
}

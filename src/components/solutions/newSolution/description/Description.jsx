import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { newSolutionUpdated } from "../../../../store/solutions";
import { Items } from "./items/Items";
import StepNavigator from "./../StepNavigator/StepNavigator";

import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";
import { TextArea } from "../../../common/formNew/textArea/TextArea";

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
          <TextArea
            title={"Solution title"}
            name={"title"}
            register={register({
              required: FORM_REQUIRED_MESSAGE,
            })}
            errors={errors}
          />

          <TextArea
            title={"Short solution description (visible to everyone)"}
            name={"shortDescription"}
            register={register({
              required: FORM_REQUIRED_MESSAGE,
            })}
            errors={errors}
          />

          <TextArea
            title={"Detailed solution description (visible when purchased)"}
            name={"detailedDescription"}
            register={register({
              required: FORM_REQUIRED_MESSAGE,
            })}
            errors={errors}
          />

          <div className="d-flex justify-content-between w-100">
            <div className="w-50 mr-5">
              <Items
                name="parts"
                type="text"
                label="Required parts"
                items={formData.parts}
                register={register}
                onItemsClick={handleItemsClick}
              />
            </div>
            <div className="w-50">
              <Items
                name="tools"
                type="text"
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
              type="text"
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

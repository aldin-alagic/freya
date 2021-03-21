import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, EditorState } from "draft-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { newSolutionUpdated } from "../../../../store/solutions";
import StepNavigator from "../StepNavigator/StepNavigator";
import { Input } from "../../../common/formNew/input/Input";
import { Items } from "../items/Items";
import Attachments from "../attachments/Attachments";

import { FORM_REQUIRED_MESSAGE } from "../../../../config.json";
import "./Solution.css";

export function Solution() {
  const dispatch = useDispatch();

  const { title, description, parts, tools, attachments } = useSelector(
    (state) => state.entities.solutions.solution.solution
  );

  const [formData, setFormData] = useState({
    parts: parts ? [...parts] : [],
    tools: tools ? [...tools] : [],
  });

  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    formState,
    errors,
    control,
  } = useForm({
    defaultValues: {
      solutionTitle: title,
    },
  });

  const handleItemsClick = (action, itemType, deletedItem = "") => {
    const newFormData = {
      parts: [...formData.parts],
      tools: [...formData.tools],
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

  const onSubmit = ({ solutionTitle, solutionDescription }) => {
    const issue = {
      step: 3,
      status: "process",
      solution: {
        title: solutionTitle,
        description: solutionDescription,
        tools: formData.tools,
        parts: formData.parts,
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

  return (
    <form
      className="animate__animated animate__fadeIn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="alert alert-warning mb-3">
        <h4 className="alert-heading">
          <FontAwesomeIcon icon={faExclamationCircle} /> Warning
        </h4>
        <hr className="my-1" />
        <p className="text-justify mb-0">
          Everything in this section except the title will be
          <span className="font-weight-bold"> hidden </span> from clients until
          they had
          <span className="font-weight-bold"> purchased</span> your solution.
        </p>
      </div>
      <div className="card mb-4">
        <div className="card-header">Solution title</div>
        <div className="card-body p-4">
          <Input
            name="solutionTitle"
            type="text"
            placeholder="Enter solution title"
            register={register({
              required: FORM_REQUIRED_MESSAGE,
            })}
            errors={errors.solutionTitle?.message}
          />
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">Solution description</div>
        <div className="card-body pt-0 px-0 pb-4">
          <div className="rte text-dark">
            <Controller
              name="solutionDescription"
              control={control}
              rules={{ required: FORM_REQUIRED_MESSAGE }}
              render={(props) => (
                <Editor
                  {...props}
                  placeholder="Describe your solution for the issue so the buyer can solve the issue..."
                  defaultEditorState={
                    description
                      ? EditorState.createWithContent(
                          convertFromRaw(description)
                        )
                      : EditorState.createEmpty()
                  }
                  wrapperClassName="demo-wrapper"
                  editorClassName="editor"
                  onEditorStateChange={(editorState) => {
                    if (editorState.blocks) {
                      props.onChange(editorState.blocks[0]);
                    }
                  }}
                />
              )}
            />
          </div>
          {errors.solutionDescription && (
            <div className="text-danger mt-2 ml-4">
              {errors.solutionDescription.message}
            </div>
          )}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">Solution requirements</div>
        <div className="card-body pt-3 pb-4 px-4">
          <div className="d-flex justify-content-between w-100">
            <div className="w-50 mr-5">
              <Items
                name="parts"
                type="text"
                label="Required parts"
                placeholder="Enter a part that is required for your solution"
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
                placeholder="Enter a tool that is required for your solution"
                items={formData.tools}
                register={register}
                onItemsClick={handleItemsClick}
              />
            </div>
          </div>
        </div>
      </div>

      <Attachments
        type="solution"
        title="Solution attachments"
        attachments={attachments}
      />

      <StepNavigator currentStep={2} onNextStepClick={handleSubmit(onSubmit)} />
    </form>
  );
}

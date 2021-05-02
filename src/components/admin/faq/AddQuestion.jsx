import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Input } from "../../common/formNew/input/Input";
import { FORM_REQUIRED_MESSAGE } from "../../../config.json";
import { questionTypes } from "../../../utils/staticData";

import "./AddQuestion.css";

export function AddQuestion() {
  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();
  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = ({ category, question, answer }) => {
    //dispatch(newSolutionUpdated(issue));
  };

  return (
    <div className="w-100">
      <h1 className="mb-5">Add a new question</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <label className="text-dark font-weight-bold" htmlFor="answer">
            Category
          </label>
          <Controller
            control={control}
            rules={{ required: FORM_REQUIRED_MESSAGE }}
            name="issueType"
            placeholder="Select an issue type"
            label="Select an issue type"
            options={questionTypes}
            menuPortalTarget={document.body}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            }}
            isSearchable
            isClearable
            components={animatedComponents}
            as={Select}
          />
        </div>

        <div className="form-group">
          <Input
            name="question"
            label="Question"
            type="text"
            placeholder="Enter question"
            register={register({
              required: FORM_REQUIRED_MESSAGE,
            })}
            errors={errors.question?.message}
          />
        </div>

        <div className="form-group">
          <label className="text-dark font-weight-bold" htmlFor="answer">
            Answer
          </label>
          <div className="rte text-dark border rounded pb-4">
            <Controller
              name="answer"
              control={control}
              rules={{ required: FORM_REQUIRED_MESSAGE }}
              render={(props) => (
                <Editor
                  {...props}
                  placeholder="Enter an answer for the proposed question..."
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
          {errors.answer && (
            <div className="text-danger mt-2 ml-4">
              {errors.answer?.message}
            </div>
          )}
        </div>
        <button className="btn btn-secondary mr-3">Cancel</button>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

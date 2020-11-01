import React, { Fragment } from "react";
import TextArea from "../../common/textArea";
import Input from "./../../common/input";

const Description = ({ values, onChange }) => {
  return (
    <Fragment>
      <div className="card mb-4">
        <div className="card-header bg-light">Description</div>
        <div className="card-body row justify-content-start px-5">
          <TextArea
            name="title"
            label="Issue title"
            rows={1}
            value={values.title}
            styleLabel="text-dark font-weight-bold"
            styleTextArea="form-control"
            onChange={onChange}
          />
          <TextArea
            name="description"
            label="Issue description"
            rows={4}
            value={values.description}
            styleLabel="text-dark font-weight-bold"
            styleTextArea="form-control"
            onChange={onChange}
          />
          <TextArea
            name="note"
            label="Note for the expert"
            rows={4}
            value={values.note}
            styleLabel="text-dark font-weight-bold"
            styleTextArea="form-control"
            onChange={onChange}
          />
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-light">Description</div>
        <div className="card-body justify-content-start px-5 mx-2">
          <div className="row">
            <div>
              <span className="text-dark font-weight-bold">Keywords</span>
              <Input
                name="keywords"
                label=""
                type="text"
                styleLabel=""
                styleInput="form-control"
              />
            </div>
            <button className="btn btn-primary mx-2 my-4">Add</button>
          </div>
          <div className="row col-12">
            <div className="badge badge-pill badge-secondary px-3 m-1">
              Magla
            </div>
            <div className="badge badge-pill badge-secondary px-3 m-1">
              Stucanje
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Description;

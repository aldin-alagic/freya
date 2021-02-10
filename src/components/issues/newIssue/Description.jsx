import React from "react";
import { PropTypes } from "prop-types";

import { TextArea } from "../../common/form/textArea/TextArea";
import { Input } from "../../common/form/input/Input";

export class Description extends React.PureComponent {
  static propTypes = {
    values: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { values, onChange } = this.props;
    return (
      <React.Fragment>
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
                <Input name="keywords" type="text" />
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
      </React.Fragment>
    );
  }
}

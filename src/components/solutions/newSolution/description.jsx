import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { TextArea } from "../../common/TextArea";
import { Input } from "../../common/Input";

export class Description extends React.Component {
  static propTypes = {
    values: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeywordsChange: PropTypes.func.isRequired,
  };

  state = { keyword: "" };

  handleClick = (issueCategory) => {
    this.setState({ issueCategory });
  };

  render() {
    const { values, onChange, onKeywordsChange } = this.props;
    let keywords = [...values.keywords];

    return (
      <React.Fragment>
        <div className="card mb-4">
          <div className="card-header bg-light">Description</div>
          <div className="card-body row justify-content-start px-5">
            <TextArea
              name="title"
              label="Solution title"
              rows={1}
              value={values.title}
              styleLabel="text-dark font-weight-bold"
              styleTextArea="form-control"
              onChange={onChange}
            />
            <TextArea
              name="shortDescription"
              label="Short solution description (visible to everyone)"
              rows={4}
              value={values.shortDescription}
              styleLabel="text-dark font-weight-bold"
              styleTextArea="form-control"
              onChange={onChange}
            />
            <TextArea
              name="detailedDescription"
              label="Detailed solution description (visible when purchased)"
              rows={4}
              value={values.detailedDescription}
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
                  value={this.state.keyword}
                  onChange={(e) => {
                    this.setState({ keyword: e.target.value });
                  }}
                />
              </div>
              <button
                className="btn btn-primary mx-2 my-4"
                onClick={(e) => {
                  if (this.state.keyword !== "")
                    onKeywordsChange(this.state.keyword, "add");
                  this.setState({ keyword: "" });
                }}
              >
                <FontAwesomeIcon
                  className="text-white"
                  icon={faPlus}
                  size="lg"
                />
              </button>
            </div>
            <div className="row col-12 px-0">
              {keywords.map((val, index) => (
                <div key={index}>
                  <div className="badge badge-pill badge-secondary px-4 py-2">
                    {keywords[index]}
                  </div>
                  <button
                    className="btn bg-white mr-2 pl-1"
                    onClick={() => onKeywordsChange(keywords[index], "remove")}
                  >
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faTimesCircle}
                      size="lg"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

import React from "react";
import { PropTypes } from "prop-types";

export class TextArea extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rows: PropTypes.number,
    register: PropTypes.object.isRequired,
    errors: PropTypes.object,
  };

  static defaultProps = {
    rows: 4,
    errors: null,
  };

  render() {
    const { title, name, rows, register, errors } = this.props;
    return (
      <div className="form-group row mx-0 px-0 mb-3 col-12">
        <label htmlFor={name} className="text-dark font-weight-bold">
          {title}
        </label>
        <textarea
          id={name}
          name={name}
          rows={rows}
          className="form-control"
          ref={register}
        />
        {errors && (
          <div className="ml-1 my-2 text-danger">{errors[name]?.message}</div>
        )}
      </div>
    );
  }
}

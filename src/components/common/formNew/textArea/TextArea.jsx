import React from "react";
import { PropTypes } from "prop-types";

export class TextArea extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
  };

  static defaultProps = {
    title: "",
    placeholder: "",
    rows: 4,
    errors: null,
  };

  render() {
    const { title, name, placeholder, rows, register, errors } = this.props;
    return (
      <div className="row col-12 mx-0 px-0">
        {title && (
          <label htmlFor={name} className="text-dark font-weight-bold">
            {title}
          </label>
        )}
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={rows}
          className="form-control"
          ref={register}
        />
        {errors && (
          <div className="text-danger mt-2">{errors[name]?.message}</div>
        )}
      </div>
    );
  }
}

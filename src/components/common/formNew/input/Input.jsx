import React from "react";
import { PropTypes } from "prop-types";

export class Input extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    register: PropTypes.object.isRequired,
    style: PropTypes.string.isRequired,
    errors: PropTypes.node,
  };

  static defaultProps = {
    label: "",
    placeholder: "",
    errors: null,
  };

  render() {
    const {
      name,
      type,
      placeholder,
      label,
      register,
      style,
      errors,
    } = this.props;
    return (
      <div className={style}>
        <label className="text-dark font-weight-bold" htmlFor={name}>
          {label}
        </label>
        <input
          name={name}
          id={name}
          placeholder={placeholder}
          className="form-control"
          type={type}
          ref={register}
        />
        {errors && <div className="ml-1 my-2 text-danger">{errors}</div>}
      </div>
    );
  }
}

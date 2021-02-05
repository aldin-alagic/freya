import React from "react";
import { PropTypes } from "prop-types";

export class Input extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.node,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    styleLabel: PropTypes.string,
    styleInput: PropTypes.string,
    error: PropTypes.string,
  };

  static defaultProps = {
    styleInput: "form-control",
  };

  render() {
    const {
      name,
      type,
      onChange,
      value,
      label,
      placeholder,
      styleLabel,
      styleInput,
      error,
    } = this.props;

    return (
      <div className="form-group row mx-0">
        {styleLabel && (
          <label className={styleLabel} htmlFor={name}>
            {label}
          </label>
        )}
        <input
          name={name}
          id={name}
          className={styleInput}
          onChange={onChange}
          type={type}
          value={value}
          placeholder={placeholder}
        />
        {error && <div className="alert alert-danger mt-1">{error}</div>}
      </div>
    );
  }
}

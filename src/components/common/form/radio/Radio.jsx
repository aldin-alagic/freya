import React from "react";
import { PropTypes } from "prop-types";

export class Radio extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
  };

  static defaultProps = {
    styleInput: "form-control",
  };

  render() {
    const { id, name, label, value, checked, error, onChange } = this.props;

    return (
      <div className="form-check m-2">
        <input
          type="radio"
          name={name}
          id={id}
          className="form-check-input"
          onChange={onChange}
          checked={checked}
          value={value}
        />
        {label && (
          <label className="form-check-label" htmlFor={id}>
            {label}
          </label>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

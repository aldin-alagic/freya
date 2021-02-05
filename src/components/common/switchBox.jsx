import React from "react";
import { PropTypes } from "prop-types";

export class SwitchBox extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    checked: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
  };

  render() {
    const { name, label, value, checked, onChange, error } = this.props;

    return (
      <React.Fragment>
        {label}
        <div className="material-switch mt-2">
          <input
            type="checkbox"
            className="custom-control-input"
            name={name}
            id={name}
            value={value}
            checked={checked}
            onChange={onChange}
          />
          <label className="bg-primary" htmlFor={name}></label>
          {error && <div className="alert alert-danger mt-1">{error}</div>}
        </div>
      </React.Fragment>
    );
  }
}

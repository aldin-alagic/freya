import React from "react";
import PhoneInput from "react-phone-input-2";
import { PropTypes } from "prop-types";

import "react-phone-input-2/lib/style.css";

export class Phone extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.node,
    label: PropTypes.string,
    styleLabel: PropTypes.string,
    error: PropTypes.string,
  };

  render() {
    const { name, value, label, styleLabel, onChange, error } = this.props;

    return (
      <div className="form-group row mx-0">
        <label className={styleLabel} htmlFor={name}>
          {label}
        </label>
        <PhoneInput
          country={"hr"}
          enableSearch
          inputStyle={{ width: "100%" }}
          inputProps={{
            name: name,
            onChange: onChange,
          }}
          value={value}
        />
        {error && <div className="alert alert-danger mt-1">{error}</div>}
      </div>
    );
  }
}

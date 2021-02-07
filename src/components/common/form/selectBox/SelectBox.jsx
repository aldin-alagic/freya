import React from "react";
import Select from "react-select";
import { PropTypes } from "prop-types";
import makeAnimated from "react-select/animated";

export class SelectBox extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.node,
    label: PropTypes.string,
    styleLabel: PropTypes.string,
    error: PropTypes.string,
  };

  render() {
    const {
      name,
      label,
      options,
      styleLabel,
      error,
      onChange,
      placeholder,
      value,
    } = this.props;
    const animatedComponents = makeAnimated();

    return (
      <div className="mb-3">
        {label && (
          <label className={styleLabel} htmlFor={name}>
            {label}
          </label>
        )}
        <Select
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          options={options}
          isSearchable={true}
          isClearable={true}
          components={animatedComponents}
          onChange={onChange}
        />
        {error && (
          <div className="d-inline-block alert alert-danger mt-1">{error}</div>
        )}
      </div>
    );
  }
}

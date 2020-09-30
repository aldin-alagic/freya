import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const SelectBox = ({ name, label, options, styleLabel, error, ...rest }) => {
  return (
    <div className="mb-3">
      {label ? (
        <label className={styleLabel} htmlFor={name}>
          {label}
        </label>
      ) : (
        ""
      )}
      <Select
        name={name}
        id={name}
        options={options}
        isSearchable={true}
        isClearable={true}
        components={animatedComponents}
        {...rest}
      />
      {error && (
        <div className="d-inline-block alert alert-danger mt-1">{error}</div>
      )}
    </div>
  );
};

export default SelectBox;

import React from "react";

const Input = ({ name, label, error, styleLabel, styleInput, ...rest }) => {
  return (
    <div className="form-group row mx-0">
      <label className={styleLabel} htmlFor={name}>
        {label}
      </label>
      <input name={name} id={name} className={styleInput} {...rest} />
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default Input;

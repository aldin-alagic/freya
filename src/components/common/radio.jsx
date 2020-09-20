import React from "react";

const Radio = ({ id, name, label, error, ...rest }) => {
  return (
    <div className="form-check m-2">
      <input
        type="radio"
        name={name}
        id={id}
        className="form-check-input"
        {...rest}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Radio;

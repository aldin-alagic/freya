import React from "react";

const SwitchBox = ({ name, label, error, ...rest }) => {
  return (
    <div>
      {label}
      <div className="material-switch mt-2">
        <input
          type="checkbox"
          className="custom-control-input"
          name={name}
          id={name}
          {...rest}
        />
        <label className="bg-primary" htmlFor={name}></label>
        {error && <div className="alert alert-danger mt-1">{error}</div>}
      </div>
    </div>
  );
};

export default SwitchBox;

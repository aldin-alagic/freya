import React from "react";

const File = ({ name, label, error, ...rest }) => {
  return (
    <div className="input-group row mx-0 mb-4">
      <div className="custom-file">
        <input
          name={name}
          id={name}
          type="file"
          className="custom-file-input  hv-pointer"
          {...rest}
        />
        <label className="custom-file-label" htmlFor={name}>
          {label}
        </label>
      </div>
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default File;

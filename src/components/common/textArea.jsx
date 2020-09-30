import React from "react";

const TextArea = ({
  name,
  label,
  columns,
  rows,
  error,
  styleLabel,
  styleTextArea,
  ...rest
}) => {
  return (
    <div className="form-group row mx-0 mb-4">
      <label htmlFor={name} className={styleLabel}>
        {label}
      </label>
      <textarea
        {...rest}
        id={name}
        name={name}
        cols={columns}
        rows={rows}
        className={styleTextArea}
      ></textarea>
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default TextArea;

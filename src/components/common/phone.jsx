import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Phone = ({ name, label, styleLabel, error, value, ...rest }) => {
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
          ...rest,
        }}
        placeholder=""
        value={value}
      />
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default Phone;

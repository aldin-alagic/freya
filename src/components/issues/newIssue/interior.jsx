import React from "react";
import Radio from "../../common/radio";

const Interior = ({ issueType, onChange }) => {
  const options = [
    { value: 1, label: "Cockpit module" },
    { value: 2, label: "Instrument switch" },
    { value: 3, label: "Instrument switch" },
    { value: 4, label: "Airbag system" },
    { value: 5, label: "Interior trim" },
    { value: 6, label: "Instrumental panel" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Interior</div>
      <div className="card-body row justify-content-start px-5">
        {options.map((option) => (
          <Radio
            key={"issue-type-" + option.value}
            id={"issueType" + option.value}
            name="issueType"
            label={option.label}
            value={option.value}
            checked={issueType == option.value ? true : false}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Interior;

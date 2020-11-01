import React from "react";
import Radio from "./../../common/radio";

const AdditionalElectricParts = ({ issueType, onChange }) => {
  const options = [
    { value: 67, label: "Various motors" },
    { value: 68, label: "Electric cable" },
    { value: 69, label: "Actuator" },
    { value: 70, label: "Semiconductor" },
    { value: 71, label: "Wire harness" },
    { value: 72, label: "Relay" },
    { value: 73, label: "Hidden switch" },
    { value: 74, label: "Electric connector" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Additional electric parts</div>
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

export default AdditionalElectricParts;

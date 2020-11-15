import React from "react";
import Radio from "./../../common/radio";

const AdditionalElectricParts = ({ issueType, onChange }) => {
  const options = [
    "Various motors",
    "Electric cable",
    "Actuator",
    "Semiconductor",
    "Wire harness",
    "Relay",
    "Hidden switch",
    "Electric connector",
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Additional electric parts</div>
      <div className="card-body row justify-content-start px-5">
        {options.map((option) => (
          <Radio
            key={"issue-type-" + option}
            id={"issueType" + option}
            name="issueType"
            label={option}
            value={option}
            checked={issueType == option ? true : false}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default AdditionalElectricParts;

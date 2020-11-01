import React from "react";
import Radio from "./../../common/radio";

const DrivingSupportSecurity = ({ issueType, onChange }) => {
  const options = [
    { value: 46, label: "Telematics, car navigation" },
    { value: 47, label: "Entertainment, audio" },
    { value: 48, label: "Security system" },
    { value: 49, label: "Monitoring system" },
    { value: 50, label: "Cruise control system" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Driving Support and Security</div>
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

export default DrivingSupportSecurity;

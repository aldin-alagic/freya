import React from "react";
import Radio from "./../../common/radio";

const DrivingSupportSecurity = ({ issueType, onChange }) => {
  const options = [
    "Telematics, car navigation",
    "Entertainment, audio",
    "Security system",
    "Monitoring system",
    "Cruise control system",
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Driving Support and Security</div>
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

export default DrivingSupportSecurity;

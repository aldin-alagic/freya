import React from "react";
import Radio from "./../../common/radio";

const Engine = ({ issueType, onChange }) => {
  const options = [
    { value: 7, label: "Air/Fuel management" },
    { value: 8, label: "Fuel handling and Evapo system" },
    { value: 9, label: "Turbo/Supercharger" },
    { value: 10, label: "Exhaust system" },
    { value: 11, label: "Engine control system" },
    { value: 12, label: "Ignition system" },
    { value: 13, label: "Engine electric system" },
    { value: 14, label: "Diesel injection system" },
    { value: 15, label: "Valvetrain" },
    { value: 16, label: "Engine cooling system" },
    { value: 17, label: "Gasoline fuel injection system" },
    { value: 18, label: "Engine lubricating system" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Engine</div>
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

export default Engine;

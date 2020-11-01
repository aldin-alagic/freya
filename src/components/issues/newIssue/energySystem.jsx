import React from "react";
import Radio from "./../../common/radio";

const EnergySystem = ({ issueType, onChange }) => {
  const options = [
    { value: 51, label: "Heather" },
    { value: 52, label: "Air Conditioner" },
    { value: 53, label: "Fuel cell system" },
    { value: 54, label: "Battery/Capacitor" },
    { value: 55, label: "Power control system" },
    { value: 56, label: "Drive train system" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Energy system</div>
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

export default EnergySystem;

import React from "react";
import Radio from "./../../common/radio";

const EnergySystem = ({ issueTypeOption, onChange }) => {
  const options = [
    "Heather",
    "Air Conditioner",
    "Fuel cell system",
    "Battery/Capacitor",
    "Power control system",
    "Drive train system",
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Energy system</div>
      <div className="card-body row justify-content-start px-5">
        {options.map((option) => (
          <Radio
            key={"issue-type-" + option}
            id={"issueTypeOption" + option}
            name="issueTypeOption"
            label={option}
            value={option}
            checked={issueTypeOption == option ? true : false}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default EnergySystem;

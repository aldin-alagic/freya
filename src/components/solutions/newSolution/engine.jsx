import React from "react";
import Radio from "./../../common/radio";

const Engine = ({ issueTypeOption, onChange }) => {
  const options = [
    "Air/Fuel management",
    "Fuel handling and Evapo system",
    "Turbo/Supercharger",
    "Exhaust system",
    "Engine control system",
    "Ignition system",
    "Engine electric system",
    "Diesel injection system",
    "Valvetrain",
    "Engine cooling system",
    "Gasoline fuel injection system",
    "Engine lubricating system",
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Engine</div>
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

export default Engine;

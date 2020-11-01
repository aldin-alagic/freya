import React from "react";
import Radio from "./../../common/radio";

const ControlSuspension = ({ issueType, onChange }) => {
  const options = [
    { value: 34, label: "Axle" },
    { value: 35, label: "Sub brake" },
    { value: 36, label: "Brake by wire" },
    { value: 37, label: "Air brake" },
    { value: 38, label: "Vehicle Dynamic Control system" },
    { value: 39, label: "Weather strip" },
    { value: 40, label: "Frame" },
    { value: 41, label: "Bumper" },
    { value: 42, label: "Lamp" },
    { value: 43, label: "Fuel tank" },
    { value: 44, label: "Key set" },
    { value: 45, label: "Pedal" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Control and suspension</div>
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

export default ControlSuspension;

import React from "react";
import Radio from "./../../common/radio";

const ControlSuspension = ({ issueType, onChange }) => {
  const options = [
    "Axle",
    "Sub brake",
    "Brake by wire",
    "Air brake",
    "Vehicle Dynamic Control system",
    "Weather strip",
    "Frame",
    "Bumper",
    "Lamp",
    "Fuel tank",
    "Key set",
    "Pedal",
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Control and suspension</div>
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

export default ControlSuspension;

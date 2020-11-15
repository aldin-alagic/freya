import React from "react";
import Radio from "./../../common/radio";

const BodyExterior = ({ issueType, onChange }) => {
  const options = [
    "Body Reinforcement/protector",
    "Door",
    "Wiper",
    "Outside mirror",
    "Body panel",
    "Weather strip",
    "Frame",
    "Bumper",
    "lamp",
    "Fuel tank",
    "Key set",
    "Rear end module",
    "Pedal",
    "Horn",
    "Gas spring",
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Body and exterior</div>
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

export default BodyExterior;

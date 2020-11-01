import React from "react";
import Radio from "./../../common/radio";

const BodyExterior = ({ issueType, onChange }) => {
  const options = [
    { value: 19, label: "Body Reinforcement/protector" },
    { value: 20, label: "Door" },
    { value: 21, label: "Wiper" },
    { value: 22, label: "Outside mirror" },
    { value: 23, label: "Body panel" },
    { value: 24, label: "Weather strip" },
    { value: 25, label: "Frame" },
    { value: 26, label: "Bumper" },
    { value: 27, label: "lamp" },
    { value: 28, label: "Fuel tank" },
    { value: 29, label: "Key set" },
    { value: 30, label: "Rear end module" },
    { value: 31, label: "Pedal" },
    { value: 32, label: "Horn" },
    { value: 33, label: "Gas spring" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Body and exterior</div>
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

export default BodyExterior;

import React from "react";
import Radio from "./../../common/radio";

const AdditionalElectricParts = () => {
  const options = [
    { value: 1, label: "Various motors" },
    { value: 2, label: "Electric cable" },
    { value: 3, label: "Actuator" },
    { value: 4, label: "Semiconductor" },
    { value: 5, label: "Wire harness" },
    { value: 6, label: "Relay" },
    { value: 7, label: "Hidden switch" },
    { value: 8, label: "Electric connector" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Additional electric parts</div>
      <div className="card-body row justify-content-start px-5">
        {options.map((option) => (
          <Radio
            key={"additional-electric-parts-" + option.value}
            id={"additional-electric-parts-" + option.value}
            name="additional-electric-parts"
            label={option.label}
            value={option.value}
          />
        ))}
      </div>
    </div>
  );
};

export default AdditionalElectricParts;

import React from "react";
import Radio from "../../common/radio";

const Sensors = ({ issueType, onChange }) => {
  const options = [
    { value: 57, label: "Airbag" },
    { value: 58, label: "ABS" },
    { value: 59, label: "Oil" },
    { value: 60, label: "Fuel" },
    { value: 61, label: "Air" },
    { value: 62, label: "Speed" },
    { value: 63, label: "Gas" },
    { value: 64, label: "Solar" },
    { value: 65, label: "G" },
    { value: 66, label: "Vacuum" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Sensors</div>
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

export default Sensors;

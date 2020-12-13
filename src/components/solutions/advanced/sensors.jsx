import React from "react";
import Radio from "../../common/radio";

const Sensors = () => {
  const options = [
    { value: 1, label: "Airbag" },
    { value: 2, label: "ABS" },
    { value: 3, label: "Oil" },
    { value: 4, label: "Fuel" },
    { value: 5, label: "Air" },
    { value: 6, label: "Speed" },
    { value: 7, label: "Gas" },
    { value: 8, label: "Solar" },
    { value: 9, label: "G" },
    { value: 10, label: "Vacuum" },
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Sensors</div>
      <div className="card-body row justify-content-start px-5">
        {options.map((option) => (
          <Radio
            key={"sensors-" + option.value}
            id={"sensors-" + option.value}
            name="sensors"
            label={option.label}
            value={option.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Sensors;

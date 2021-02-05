import React from "react";

import { Radio } from "../../common/Radio";

export class EnergySystem extends React.PureComponent {
  render() {
    const options = [
      { value: 1, label: "Heather" },
      { value: 2, label: "Air Conditioner" },
      { value: 3, label: "Fuel cell system" },
      { value: 4, label: "Battery/Capacitor" },
      { value: 5, label: "Power control system" },
      { value: 6, label: "Drive train system" },
    ];

    return (
      <div className="card mb-4">
        <div className="card-header bg-light">Energy system</div>
        <div className="card-body row justify-content-start px-5">
          {options.map((option) => (
            <Radio
              key={`energy-system-${option.value}`}
              id={`energy-system-${option.value}`}
              name="energy-system"
              label={option.label}
              value={option.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

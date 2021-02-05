import React from "react";

import { Radio } from "../../common/Radio";

export class Engine extends React.PureComponent {
  render() {
    const options = [
      { value: 1, label: "Air/Fuel management" },
      { value: 2, label: "Fuel handling and Evapo system" },
      { value: 3, label: "Turbo/Supercharger" },
      { value: 4, label: "Exhaust system" },
      { value: 5, label: "Engine control system" },
      { value: 6, label: "Ignition system" },
      { value: 7, label: "Engine electric system" },
      { value: 8, label: "Diesel injection system" },
      { value: 9, label: "Valvetrain" },
      { value: 10, label: "Engine cooling system" },
      { value: 11, label: "Gasoline fuel injection system" },
      { value: 12, label: "Engine lubricating system" },
    ];

    return (
      <div className="card mb-4">
        <div className="card-header bg-light">Engine</div>
        <div className="card-body row justify-content-start px-5">
          {options.map((option) => (
            <Radio
              key={`engine-${option.value}`}
              id={`engine-${option.value}`}
              name="engine"
              label={option.label}
              value={option.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

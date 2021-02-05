import React from "react";

import { Radio } from "../../common/Radio";
export class ControlSuspension extends React.PureComponent {
  render() {
    const options = [
      { value: 1, label: "Axle" },
      { value: 2, label: "Sub brake" },
      { value: 3, label: "Brake by wire" },
      { value: 4, label: "Air brake" },
      { value: 5, label: "Vehicle Dynamic Control system" },
      { value: 6, label: "Weather strip" },
      { value: 7, label: "Frame" },
      { value: 8, label: "Bumper" },
      { value: 9, label: "Lamp" },
      { value: 10, label: "Fuel tank" },
      { value: 11, label: "Key set" },
      { value: 12, label: "Pedal" },
    ];

    return (
      <div className="card mb-4">
        <div className="card-header bg-light">Control and suspension</div>
        <div className="card-body row justify-content-start px-5">
          {options.map((option) => (
            <Radio
              key={`control-suspension-${option.value}`}
              id={`control-suspension-${option.value}`}
              name="control-suspension"
              label={option.label}
              value={option.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

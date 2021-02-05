import React from "react";

import { Radio } from "../../common/Radio";

export class BodyExterior extends React.PureComponent {
  render() {
    const options = [
      { value: 1, label: "Body Reinforcement/protector" },
      { value: 2, label: "Door" },
      { value: 3, label: "Wiper" },
      { value: 4, label: "Outside mirror" },
      { value: 5, label: "Body panel" },
      { value: 6, label: "Weather strip" },
      { value: 7, label: "Frame" },
      { value: 8, label: "Bumper" },
      { value: 9, label: "lamp" },
      { value: 10, label: "Fuel tank" },
      { value: 11, label: "Key set" },
      { value: 12, label: "Rear end module" },
      { value: 13, label: "Pedal" },
      { value: 14, label: "Horn" },
      { value: 15, label: "Gas spring" },
    ];

    return (
      <div className="card mb-4">
        <div className="card-header bg-light">Body and exterior</div>
        <div className="card-body row justify-content-start px-5">
          {options.map((option) => (
            <Radio
              key={`body-exterior-${option.value}`}
              id={`body-exterior-${option.value}`}
              name="body-exterior"
              label={option.label}
              value={option.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

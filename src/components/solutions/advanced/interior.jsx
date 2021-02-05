import React from "react";

import { Radio } from "../../common/Radio";

export class Interior extends React.PureComponent {
  render() {
    const options = [
      { value: 1, label: "Cockpit module" },
      { value: 2, label: "Instrument switch" },
      { value: 3, label: "Instrument switch" },
      { value: 4, label: "Airbag system" },
      { value: 5, label: "Interior trim" },
      { value: 6, label: "Instrumental panel" },
    ];

    return (
      <div className="card mb-4">
        <div className="card-header bg-light">Interior</div>
        <div className="card-body row justify-content-start px-5">
          {options.map((option) => (
            <Radio
              key={`interior-${option.value}`}
              id={`interior-${option.value}`}
              name="interior"
              label={option.label}
              value={option.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

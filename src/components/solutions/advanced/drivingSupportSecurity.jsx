import React from "react";

import { Radio } from "../../common/Radio";

export class DrivingSupportSecurity extends React.PureComponent {
  render() {
    const options = [
      { value: 1, label: "Telematics, car navigation" },
      { value: 2, label: "Entertainment, audio" },
      { value: 3, label: "Security system" },
      { value: 4, label: "Monitoring system" },
      { value: 5, label: "Cruise control system" },
    ];

    return (
      <div className="card mb-4">
        <div className="card-header bg-light">Driving Support and Security</div>
        <div className="card-body row justify-content-start px-5">
          {options.map((option) => (
            <Radio
              key={`driving-support-security-${option.value}`}
              id={`driving-support-security-${option.value}`}
              name="driving-support-security"
              label={option.label}
              value={option.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

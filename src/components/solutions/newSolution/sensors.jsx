import React from "react";
import Radio from "../../common/radio";

const Sensors = ({ issueTypeOption, onChange }) => {
  const options = [
    "Airbag",
    "ABS",
    "Oil",
    "Fuel",
    "Air",
    "Speed",
    "Gas",
    "Solar",
    "G",
    "Vacuum",
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Sensors</div>
      <div className="card-body row justify-content-start px-5">
        {options.map((option) => (
          <Radio
            key={"issue-type-" + option}
            id={"issueTypeOption" + option}
            name="issueTypeOption"
            label={option}
            value={option}
            checked={issueTypeOption == option ? true : false}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Sensors;

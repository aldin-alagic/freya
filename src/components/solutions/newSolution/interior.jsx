import React from "react";
import Radio from "../../common/radio";

const Interior = ({ issueTypeOption, onChange }) => {
  const options = [
    "Cockpit module",
    "Instrument switch",
    "Airbag system",
    "Interior trim",
    "Instrumental panel",
  ];

  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Interior</div>
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

export default Interior;

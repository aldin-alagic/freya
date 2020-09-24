import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Attachments = () => {
  return (
    <div>
      <h5 className="text-primary bg-light p-2">Attachments</h5>
      <div className="row justify-content-start px-4 mb-2">
        <FontAwesomeIcon
          className="text-secondary m-2"
          icon={faImage}
          size="6x"
        />
        <FontAwesomeIcon
          className="text-secondary m-2"
          icon={faImage}
          size="6x"
        />
        <FontAwesomeIcon
          className="text-secondary m-2"
          icon={faImage}
          size="6x"
        />
      </div>
    </div>
  );
};

export default Attachments;

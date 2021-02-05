import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Attachments = () => {
  return (
    <div className="card mb-4">
      <div className="card-header bg-light">Attachments</div>
      <div className="card-body row justify-content-start px-5">
        <input
          class="form-control-file"
          id="attachments"
          name="attachments"
          type="file"
          multiple
        />
        <div className="row px-4 mb-2">
          <FontAwesomeIcon
            className="text-secondary mx-2"
            icon={faImage}
            size="6x"
          />
          <FontAwesomeIcon
            className="text-secondary mx-2"
            icon={faImage}
            size="6x"
          />
          <FontAwesomeIcon
            className="text-secondary mx-2"
            icon={faImage}
            size="6x"
          />
        </div>
      </div>
    </div>
  );
};

export default Attachments;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export class Attachments extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h5 className="text-primary bg-light p-2 mb-1">Attachments</h5>
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
      </React.Fragment>
    );
  }
}

import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export class Thumbnails extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    attachments: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { title, attachments } = this.props;

    const thumbnails =
      attachments.length > 0 ? (
        attachments.map((attachment, index) => (
          <div key={index} className="text-center col-3 mt-2">
            <div>
              {attachment.data.startsWith("data:image") ? (
                <img
                  className="image-fit rounded border col-12 px-0"
                  src={attachment.data}
                  alt={`Attachment ${attachment.name}`}
                  height="150"
                />
              ) : (
                <FontAwesomeIcon
                  className="text-secondary"
                  icon={faFile}
                  size="7x"
                  fixedWidth
                />
              )}
              <p className="my-1">{attachment.name}</p>
            </div>
          </div>
        ))
      ) : (
        <span>Attachments have not been added.</span>
      );

    return (
      <React.Fragment>
        <h5 className="text-primary bg-light p-2">{title}</h5>
        <div className="row justify-content-start px-4 my-3">{thumbnails}</div>
      </React.Fragment>
    );
  }
}

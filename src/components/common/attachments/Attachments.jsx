import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Gallery } from "../gallery/Gallery";

import "./Attachments.css";

export class Attachments extends React.PureComponent {
  static propTypes = {
    attachments: PropTypes.arrayOf(PropTypes.object).isRequired,
    owner: PropTypes.bool.isRequired,
  };

  state = {
    galleryOpened: false,
  };

  onAttachmentClick = () => {
    let open = this.state.galleryOpened;
    this.setState({ galleryOpened: !open });
  };

  showThumbnails = () => {
    const { attachments, owner } = this.props;
    return attachments.length > 0 ? (
      attachments.map((attachment, index) => (
        <div key={index} className="text-center col-3 mt-2 px-0">
          <div>
            {owner && attachment.b64_header.startsWith("data:image") ? (
              <img
                className="attachment image-fit rounded border col-12 px-0"
                src={attachment.data}
                alt={`Attachment ${attachment.name}`}
                height="150"
                onClick={this.onAttachmentClick}
              />
            ) : (
              <FontAwesomeIcon
                className="text-secondary"
                icon={faFile}
                size="7x"
              />
            )}
            <p className="my-1">{attachment.title}</p>
          </div>
        </div>
      ))
    ) : (
      <span>Attachments have not been added.</span>
    );
  };

  render() {
    return (
      <React.Fragment>
        <h5 className="text-primary bg-light p-2">Attachments</h5>
        <div className="row justify-content-start my-3">
          {this.showThumbnails()}
          {this.state.galleryOpened && (
            <Gallery onReturnClick={this.onAttachmentClick} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

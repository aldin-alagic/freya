import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { CSSTransitionGroup } from "react-transition-group";

import { newIssueUpdated } from "../../../../store/issues";
import { getBase64 } from './../../../../utils/fileConverter';

import "./Attachments.css";

class Attachments extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    attachments: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  addAttachment = async (file) => {
    const { type, updateIssue } = this.props;
    await getBase64(file)
      .then((result) => {
        const data = {
          [type]: { attachment: { name: file.name, data: result } },
        };
        updateIssue(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  removeAttachment = (removedAttachment) => {
    const { type, attachments, updateIssue } = this.props;
    const data = {
      [type]: {
        attachments: attachments.filter(
          (attachment) => attachment.name !== removedAttachment
        ),
      },
    };
    updateIssue(data);
  };

  handleChangeStatus = async (file, status) => {
    if (status === "done") {
      await this.addAttachment(file.file);
      file.remove();
    }
  };

  render() {
    const { title, attachments } = this.props;

    const renderThumbnails =
      attachments.length > 0 ? (
        attachments.map((attachment) => (
          <div key={attachment.name} className="text-center col-3">
            <div className="mb-4">
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
              <button
                onClick={() => this.removeAttachment(attachment.name)}
                className="btn btn-danger mx-3"
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="font-weight-bold text-center w-100 mb-4">
          Add up to five attachments
        </p>
      );

    return (
      <div className="card mb-4">
        <div className="card-header">{title}</div>
        <div className="card-body p-4">
          <CSSTransitionGroup
            component="div"
            className="row align-items-start mx-0 mb-3 px-2 pt-4 border rounded"
            transitionName={{
              appear: "animate__animated",
              appearActive: "animate__pulse",
              enter: "animate__animated",
              enterActive: "animate__pulse",
              leave: "animate__flipOutX",
            }}
            transitionEnterTimeout={0}
            transitionAppearTimeout={0}
            transitionLeaveTimeout={0}
          >
            {renderThumbnails}
          </CSSTransitionGroup>
          <Dropzone
            accept="image/*"
            maxFiles={5}
            onChangeStatus={this.handleChangeStatus}
            submitButtonContent={null}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateIssue: (data) => dispatch(newIssueUpdated(data)),
});

export default connect(null, mapDispatchToProps)(Attachments);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { CSSTransitionGroup } from "react-transition-group";

import { newIssueUpdated } from "../../../../store/issues";
import StepNavigator from "../StepNavigator/StepNavigator";
import { getBase64 } from "./../../../../utils/fileConverter";

import "./Attachments.css";

export function Attachments() {
  const dispatch = useDispatch();
  const attachments = useSelector(
    (state) => state.entities.issues.newIssue.attachments
  );

  const getAttachments = async (files) => {
    let storeAttachments = [];
    for (const file of files) {
      await getBase64(file.file)
        .then((result) => {
          let attachment = { name: file.file.name, data: result };
          storeAttachments.push(attachment);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    dispatch(
      newIssueUpdated({
        attachments: storeAttachments,
      })
    );
  };

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const onRemoveClick = (attachmentIndex) => {
    dispatch(
      newIssueUpdated({
        attachments: attachments.filter(
          (value, index) => index !== attachmentIndex
        ),
      })
    );
  };

  const handleAttachmentsSubmit = async (files, allFiles) => {
    await getAttachments(files);
  };

  const handleSubmit = (data) => {
    dispatch(
      newIssueUpdated({
        status: "process",
        step: 4,
      })
    );
  };

  const fileThumbnails = attachments.map((attachment, index) => (
    <div key={attachment.name} className="text-center col-3">
      <div className="mb-3">
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
          onClick={() => onRemoveClick(index)}
          className="btn btn-danger mx-3"
          type="button"
        >
          Remove
        </button>
      </div>
    </div>
  ));

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="card mb-4">
        <div className="card-header bg-light">Issue attachments</div>
        <div className="card-body py-4">
          <CSSTransitionGroup
            component="div"
            className="row align-items-start mt-2 mb-4 mx-3 px-3 pt-4 pb-2 border rounded"
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
            {attachments.length > 0 ? (
              fileThumbnails
            ) : (
              <p className="font-weight-bold text-center w-100">
                Add up to five attachments
              </p>
            )}
          </CSSTransitionGroup>
          <div className="m-3">
            <Dropzone
              accept="image/*"
              maxFiles={5}
              getUploadParams={getUploadParams}
              onSubmit={handleAttachmentsSubmit}
            />
          </div>
        </div>
      </div>
      <StepNavigator currentStep={3} onNextStepClick={handleSubmit} />
    </div>
  );
}

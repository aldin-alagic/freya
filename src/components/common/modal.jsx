import React from "react";

const Modal = ({ title, children: content }) => {
  return (
    <div
      className="modal fade"
      id="smallModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="smallModalTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-sm modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="smallModalLongTitle">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{content}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

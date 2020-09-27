import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from "./common/modal";
import ReportForm from "./reportForm";

const Report = () => {
  return (
    <div>
      <div
        className="bug-report btn btn-secondary p-2"
        data-toggle="modal"
        data-target="#report-modal"
        data-tip="Send a report"
      >
        <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
      </div>
      <Modal
        id="report-modal"
        title="Send a report"
        button="Send"
        small={false}
      >
        <div className="m-2">
          <p className="mb-3">Report a problem or request a new feature:</p>
          <ReportForm />
        </div>
      </Modal>
    </div>
  );
};

export default Report;

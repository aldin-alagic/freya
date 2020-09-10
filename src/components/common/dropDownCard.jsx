import React from "react";

const DropDownCard = ({ id, question, answer }) => {
  const idHeading = "heading" + id;
  const idCollapse = "collapse" + id;

  return (
    <div className="panel panel-default">
      <div className="panel-heading p-3 mb-3" role="tab" id={idHeading}>
        <h3 className="panel-title mb-0">
          <a
            className="collapsed"
            role="button"
            title=""
            data-toggle="collapse"
            data-parent="#accordion"
            href={"#" + idCollapse}
            aria-expanded="true"
            aria-controls={idCollapse}
          >
            {question}
          </a>
        </h3>
      </div>
      <div
        id={idCollapse}
        className="panel-collapse collapse"
        role="tabpanel"
        aria-labelledby={idHeading}
      >
        <div className="panel-body px-3 mb-4 text-justify">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
export default DropDownCard;

import React from "react";

const DropDownCard = ({
  id,
  title,
  titleStyle,
  children: content,
  hidden = true,
}) => {
  const idHeading = "heading" + id;
  const idCollapse = "collapse" + id;
  let panelStyle = "panel-collapse";
  if (hidden) {
    panelStyle += " collapse";
  }

  return (
    <div className="panel panel-default">
      <div className="panel-heading p-3 mb-3" role="tab" id={idHeading}>
        <h3 className="panel-title mb-0">
          <a
            className={titleStyle}
            role="button"
            title=""
            data-toggle="collapse"
            data-parent="#accordion"
            href={"#" + idCollapse}
            aria-expanded="false"
            aria-controls={idCollapse}
          >
            {title}
          </a>
        </h3>
      </div>
      <div
        id={idCollapse}
        className={panelStyle}
        role="tabpanel"
        aria-labelledby={idHeading}
      >
        <div className="panel-body px-3 mb-4 text-justify">{content}</div>
      </div>
    </div>
  );
};
export default DropDownCard;

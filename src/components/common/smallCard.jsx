import React from "react";

const SmallCard = ({ id, name, title, text, icon, ...rest }) => {
  return (
    <div className="card h-100" {...rest}>
      <div className="card-body h-100">
        <div className="media d-flex h-100">
          <div className="align-self-center col-3">{icon}</div>
          <div className="media-body col-9">
            <h6>{title}</h6>
            <span className="text-justify">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SmallCard;

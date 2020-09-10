import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PricingCard = ({ id, price, title, url, button, buttonStyle, items }) => {
  return (
    <div id={id} className="hvr-float col-md-4 p-2">
      <div className="card">
        <div className="card-body d-flex flex-column text-center">
          <h4 className="card-title">{title}</h4>
          <h5 className="text-secondary">{price}</h5>
          <ul className="ul-no-bullets text-left font-weight-bold">
            {items.map(function (item, index) {
              return (
                <li key={id + "_" + index}>
                  <FontAwesomeIcon
                    className="text-success mr-2"
                    icon={faCheck}
                  />
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="mt-auto d-flex justify-content-center">
            <Link className={buttonStyle} to={url}>
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PricingCard;

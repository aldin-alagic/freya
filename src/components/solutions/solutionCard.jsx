import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheckCircle,
  faCoins,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SolutionCard = ({
  title,
  description,
  company,
  offer,
  keywords,
  solutionUrl,
}) => {
  return (
    <div className="bg-light p-4 mb-3">
      <div className="row m-1 pb-2">
        <FontAwesomeIcon className="text-dark" icon={faUser} size="4x" />
        <div className="ml-3 mr-auto mb-2">
          <Link to="/home">{company}</Link>
          <div className="text-secondary">Expert</div>
          <div className="text-success">
            Verified
            <FontAwesomeIcon className="ml-1" icon={faCheckCircle} />
          </div>
        </div>
        <div className="text-center p-3 font-weight-bold my-auto">
          <span className="text-secondary col-12">
            {offer[0].price} <FontAwesomeIcon icon={faCoins} />
          </span>
          <span className="text-warning col-12">
            {offer[1].price} <FontAwesomeIcon icon={faCoins} />
          </span>
        </div>
      </div>
      <Link to={solutionUrl}>
        <h5>{title}</h5>
      </Link>
      <p className="text-justify">{description}</p>
      <div>
        {keywords.map(function (keyword, index) {
          return (
            <span
              key={"keyword-" + index}
              className="badge badge-pill badge-secondary px-2 m-1"
            >
              {keyword}
            </span>
          );
        })}
      </div>
      <hr />
      <div className="row justify-content-center">
        <FontAwesomeIcon className="text-danger m-1" icon={faBan} size="2x" />
        <FontAwesomeIcon
          className="text-primary m-1"
          icon={faHeart}
          size="2x"
        />
        <Link className="btn btn-primary m-1" to="/home">
          Expert
        </Link>
        {solutionUrl ? (
          <Link className="btn btn-primary m-1" to={solutionUrl}>
            Solution
          </Link>
        ) : null}
        <Link className="btn btn-primary m-1" to="/home">
          Send a message
        </Link>
        {solutionUrl ? null : (
          <Link className="btn btn-primary m-1" to="/home">
            Purchase
          </Link>
        )}
      </div>
    </div>
  );
};

export default SolutionCard;

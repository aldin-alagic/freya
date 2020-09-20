import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheckCircle,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SolutionCard = ({ title, description, company, price, tags }) => {
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
        <div className="badge-pill badge-primary text-center col-md-3 col-sm-12 py-2 my-md-4">
          {price} Tokens
        </div>
      </div>
      <Link to="/home">
        <h5>{title}</h5>
      </Link>
      <p className="text-justify">{description}</p>
      <div>
        {tags.map(function (tag, index) {
          return (
            <span
              key={"tag-" + index}
              className="badge badge-pill badge-secondary px-2 m-1"
            >
              {tag}
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
          View profile
        </Link>
        <Link className="btn btn-primary m-1" to="/home">
          View
        </Link>
        <Link className="btn btn-primary m-1" to="/home">
          Send a message
        </Link>
        <Link className="btn btn-primary m-1" to="/home">
          Purchase
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;

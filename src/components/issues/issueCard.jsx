import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SwitchBox from "./../common/switchBox";

const IssueCard = ({ title, description, user, tags, url, offers, views }) => {
  return (
    <div className="bg-light p-4 mb-3">
      <div className="row m-1 pb-2">
        <FontAwesomeIcon className="text-dark" icon={faUser} size="4x" />
        <div className="ml-3 mr-auto mb-2">
          <Link to="/home">{user}</Link>
          <div className="text-secondary">User</div>
          <div className="text-success">
            Verified
            <FontAwesomeIcon className="ml-1" icon={faCheckCircle} />
          </div>
        </div>
        <div>
          <div className="d-flex">
            <span className="mt-1 mr-3">Published</span>
            <SwitchBox name="publish" />
          </div>
          <div>
            <span className="badge badge-secondary p-2 mr-2">
              {views} views
            </span>
            <span className="badge badge-secondary p-2">{offers} offers</span>
          </div>
        </div>
      </div>
      <Link to={url}>
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
        <Link className="btn btn-primary m-1" to={url}>
          View issue
        </Link>
        <Link className="btn btn-primary m-1" to="/home">
          View offers
        </Link>
        <Link className="btn btn-primary m-1" to="/home">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default IssueCard;

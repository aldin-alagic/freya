import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import { SwitchBox } from "../common/SwitchBox";

export class IssueCard extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    views: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    offers: PropTypes.number.isRequired,
  };

  render() {
    const { title, description, user, tags, url, offers, views } = this.props;

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
            <div className="d-flex mb-3">
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
        <div className="row justify-content-end pr-2">
          <Link className="btn btn-primary m-1" to={url}>
            View issue
          </Link>
          <Link className="btn btn-primary m-1" to="/home">
            Edit
          </Link>
        </div>
      </div>
    );
  }
}

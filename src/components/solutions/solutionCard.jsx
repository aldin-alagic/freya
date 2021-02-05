import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheckCircle,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export class SolutionCard extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    solutionUrl: PropTypes.string.isRequired,
  };

  render() {
    const {
      title,
      description,
      company,
      price,
      tags,
      solutionUrl,
    } = this.props;

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
          <div className="badge badge-secondary text-center p-3 my-auto">
            {price} Tokens
          </div>
        </div>
        <Link to={solutionUrl}>
          <h5>{title}</h5>
        </Link>
        <p className="text-justify">{description}</p>
        <div>
          {tags.map(function (tag, index) {
            return (
              <span
                key={`tag-${index}`}
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
          <Link className="btn btn-primary m-1" to={solutionUrl}>
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
  }
}

import React from "react";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCircle,
  faCoins,
  faHeart,
  faUser,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import "./SolutionCard.css";
import bluredInformation from "../../../images/blured_information.jpg";

export class SolutionCard extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    offer: PropTypes.arrayOf(PropTypes.number).isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    solutionId: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    limited: PropTypes.bool.isRequired,
  };

  render() {
    const {
      title,
      description,
      company,
      offer,
      views,
      keywords,
      solutionId,
      userId,
      limited,
    } = this.props;

    const url = `/solution/${solutionId}/overview`;

    const cardButtons = () => {
      return limited ? (
        <React.Fragment>
          <span data-tip="Available to logged users">
            <Link className="btn btn-sm btn-primary disabled m-1">Expert</Link>
          </span>

          <Link className="btn btn-sm btn-primary m-1" to={url}>
            Solution
          </Link>
          <span data-tip="Available to logged users">
            <Link className="btn btn-sm btn-primary disabled m-1">Message</Link>
          </span>
          <span data-tip="Available to logged users">
            <Link className="btn btn-sm btn-primary disabled m-1">
              Purchase
            </Link>
          </span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link className="btn btn-sm btn-primary m-1" to="\">
            Expert
          </Link>
          <Link className="btn btn-sm btn-primary m-1" to={url}>
            Solution
          </Link>
          <Link className="btn btn-sm btn-primary m-1">Message</Link>
          <Link className="btn btn-sm btn-primary m-1">Purchase</Link>
        </React.Fragment>
      );
    };

    return (
      <div className="rounded font-sm shadow px-4 pt-3 pb-2 mb-3">
        <div className="row px-3 pb-0 mb-0">
          {limited ? (
            <img
              alt="Information hidden"
              src={bluredInformation}
              className="col-4 pl-0 mr-sm-0 mr-md-auto mb-1"
              data-tip="Available to logged users"
            />
          ) : (
            <React.Fragment>
              <FontAwesomeIcon className="text-dark" icon={faUser} size="4x" />
              <div className="ml-3 mr-sm-0 mr-md-auto mb-1">
                <Link to="/home">
                  {company} <span className="text-info">#{userId}</span>
                </Link>
                <div>Expert</div>
                <div className="text-success">
                  <FontAwesomeIcon className="mr-1" icon={faCircle} />
                  Online
                </div>
              </div>
            </React.Fragment>
          )}
          <div className="text-center pr-0 py-2 font-weight-bold font-md my-auto">
            <span className="text-primary col-12">
              {views ? views : 0} <FontAwesomeIcon icon={faEye} />
            </span>
            <span className="text-secondary col-12">
              {offer[1].price} <FontAwesomeIcon icon={faCoins} />
            </span>
            <span className="text-warning col-12 pr-1">
              {offer[0].price} <FontAwesomeIcon icon={faCoins} />
            </span>
          </div>
        </div>
        <Link to={url}>
          <h6 className="mb-0">
            <span className="text-info mr-2">#{solutionId}</span>
            {title}
          </h6>
        </Link>
        <p className="text-justify mb-1">{description}</p>
        <div>
          {keywords.map(function (keyword, index) {
            return (
              <span
                key={"keyword-" + index}
                className="badge badge-pill badge-secondary px-3 py-1 m-1"
              >
                {keyword}
              </span>
            );
          })}
        </div>
        <hr className="my-1" />
        <div className="row justify-content-end pr-2">
          <FontAwesomeIcon className="text-danger m-1" icon={faBan} size="2x" />
          <FontAwesomeIcon
            className="text-primary m-1"
            icon={faHeart}
            size="2x"
          />
          {cardButtons()}
        </div>
        <ReactTooltip place="bottom" type="dark" effect="solid" />
      </div>
    );
  }
}

import React from "react";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCircle,
  faCoins,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import "./SolutionCard.css";
import bluredInformation from "../../../images/blured_information.jpg";

export class SolutionCard extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    prices: PropTypes.arrayOf(PropTypes.object).isRequired,
    solutionId: PropTypes.number.isRequired,
    expertId: PropTypes.number.isRequired,
    limited: PropTypes.bool.isRequired,
  };

  render() {
    const {
      title,
      description,
      companyName,
      prices,
      views,
      solutionId,
      expertId,
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
                  {companyName}
                  <span className="text-muted ml-1">#{expertId}</span>
                </Link>
                <div>Expert</div>
                <div className="text-success">
                  <FontAwesomeIcon className="mr-1" icon={faCircle} />
                  Online
                </div>
              </div>
            </React.Fragment>
          )}
          <div className="d-flex text-muted font-weight-bold font-md p-0 m-0">
            <div className="mx-3 text-center">
              <div>Views</div>
              <span className="text-dark">{views ? views : 0}</span>
            </div>
            <div className="mx-3 text-center">
              <div>Price</div>
              <span className="text-dark">
                {prices[0].standard}
                <FontAwesomeIcon
                  className="text-dark ml-1"
                  icon={faCoins}
                  size="sm"
                />
              </span>
            </div>
          </div>
        </div>
        <Link to={url}>
          <h6 className="mb-0">
            {title}
            <span className="text-muted ml-2">#{solutionId}</span>
          </h6>
        </Link>
        <p className="text-justify mb-1">{description}</p>
        <hr className="mt-2 mb-1" />
        <div className="row justify-content-end pr-2">
          <div className="ml-2 mr-auto">
            <FontAwesomeIcon
              className="favorite-btn m-1 "
              icon={faStar}
              size="2x"
              fixedWidth
            />
            <FontAwesomeIcon
              className="ban-btn m-1"
              icon={faBan}
              size="2x"
              fixedWidth
            />
          </div>
          {cardButtons()}
        </div>
        <ReactTooltip place="bottom" type="dark" effect="solid" />
      </div>
    );
  }
}

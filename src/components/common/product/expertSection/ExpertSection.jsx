import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMedal, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export class ExpertSection extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    brands: PropTypes.arrayOf(PropTypes.string).isRequired,
    professions: PropTypes.arrayOf(PropTypes.string).isRequired,
    limited: PropTypes.bool.isRequired,
  };

  render() {
    const {
      id,
      company,
      country,
      about,
      languages,
      brands,
      professions,
      limited,
    } = this.props;

    return (
      <div>
        <h5 className="text-primary bg-light p-2">About the expert</h5>
        <div className="row justify-content-start mx-4">
          <div className="mb-2 mr-2">
            <div>
              <FontAwesomeIcon
                className="mb-2 text-dark mr-2"
                icon={faUser}
                size="3x"
              />
              <div className="d-inline-block">
                <Link to="/home">{company}</Link>
                <div>
                  <FontAwesomeIcon
                    className="text-warning mr-1"
                    icon={faMedal}
                  />
                  4.8
                </div>
                <div>
                  <FontAwesomeIcon
                    className="text-success mr-1"
                    icon={faCircle}
                    size="sm"
                  />
                  Online
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2">
            <h6>From</h6>
            <span>{country}</span>
          </div>
          <div className="mx-2">
            <h6>Member since</h6>
            <span>Not provided</span>
          </div>
          <div className="mx-2">
            <h6>Languages</h6>
            <span>{languages.join(", ")}</span>
          </div>
          <div className="mx-2">
            <h6>Solutions</h6>
            <span>Not provided</span>
          </div>
          <div className="mx-2">
            <h6>Success</h6>
            <span>Not provided</span>
          </div>
          <div className="mx-2">
            <h6>Rating</h6>
            <span>Not provided</span>
          </div>
        </div>
        <hr className="my-2 mx-4" />
        <div className="mx-4">
          <h6>Expert for issues with:</h6> <span>{professions.join(", ")}</span>
        </div>
        <div className="mx-4">
          <h6>Expert for brands:</h6> <span>{brands.join(", ")}</span>
        </div>
        <hr className="my-2 mx-4" />
        <p className="text-justify px-4">{about}</p>
        <div className="ml-4 mb-4">
          <Link className="btn btn-sm btn-primary" to="/home">
            Message expert
          </Link>
        </div>
        <hr className="my-2 mx-4 d-lg-block d-xl-none" />
      </div>
    );
  }
}

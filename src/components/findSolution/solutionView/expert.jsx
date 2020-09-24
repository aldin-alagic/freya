import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMedal, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Expert = () => {
  return (
    <div>
      <h5 className="text-primary bg-light p-2">About expert</h5>
      <div className="row px-3 mb-2">
        <div className="col-md-4">
          <FontAwesomeIcon className="mb-2 text-dark" icon={faUser} size="3x" />
          <div className="d-inline-block ml-3">
            <Link to="/home">Company XYZ</Link>
            <div>
              <FontAwesomeIcon className="text-warning mr-1" icon={faMedal} />
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
        <div className="col-md-8 d-flex justify-content-between">
          <div className="d-inline-block">
            <span>From</span>
            <h6>Italy</h6>
          </div>
          <div className="d-inline-block">
            <span>Member since</span>
            <h6>Jan 2020</h6>
          </div>
          <div className="d-inline-block">
            <span>Languages</span>
            <h6>EN, CRO, IT</h6>
          </div>
          <div className="d-inline-block">
            <span>Hourly rate</span>
            <h6>45 token/hr</h6>
          </div>
        </div>
      </div>
      <hr className="my-2 mx-2" />
      <p className="text-justify px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
        posuere lorem. Sed interdum facilisis ornare. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Fusce nec posuere lorem. Sed interdum
        facilisis ornare.
      </p>
    </div>
  );
};

export default Expert;

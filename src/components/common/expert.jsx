import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMedal, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Expert = () => {
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
        </div>
        <div className="mx-2">
          <span>From</span>
          <h6>Italy</h6>
        </div>
        <div className="mx-2">
          <span>Member since</span>
          <h6>Jan 2020</h6>
        </div>
        <div className="mx-2">
          <span>Languages</span>
          <h6>EN, CRO, IT</h6>
        </div>
        <div className="mx-2">
          <span>Hourly rate</span>
          <h6>45 token/hr</h6>
        </div>
      </div>
      <hr className="my-2 mx-4" />
      <p className="text-justify px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
        posuere lorem. Sed interdum facilisis ornare. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Fusce nec posuere lorem. Sed interdum
        facilisis ornare.
      </p>
      <div className="ml-4 mb-4">
        <Link className="btn btn-sm btn-primary" to="/home">
          Message expert
        </Link>
      </div>
      <hr className="my-2 mx-4 d-lg-block d-xl-none" />
    </div>
  );
};

export default Expert;

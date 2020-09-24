import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SolutionPremium = () => {
  return (
    <div className="card rounded-0 mb-4 px-4">
      <div className="card-body row">
        <div className="d-flex col-12 justify-content-between px-0 mb-2">
          <h6>Premium</h6>
          <h6>150 tokens</h6>
        </div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          posuere lorem. Sed interdum facilisis ornare.
        </p>
        <h6>Includes</h6>
        <ul className="ul-no-bullets text-left pl-0 col-12">
          <li>
            <FontAwesomeIcon className="text-success mr-1" icon={faCheck} />
            Full solution
          </li>
          <li>
            <FontAwesomeIcon className="text-success mr-1" icon={faCheck} />
            All attachments
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SolutionPremium;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const StandardPackage = () => {
  return (
    <div className="card rounded-bottom rounded-top-0 mb-2 px-2">
      <div className="card-body">
        <h6>Standard package</h6>
        <h6 className="text-muted">120 tokens</h6>
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
        </ul>
      </div>
    </div>
  );
};

export default StandardPackage;

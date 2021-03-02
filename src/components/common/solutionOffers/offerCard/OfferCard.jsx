import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export class OfferCard extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    minutes: PropTypes.number,
    price: PropTypes.number.isRequired,
  };

  static defaultProps = {
    minutes: 0,
  };

  render() {
    const { title, options, price, minutes } = this.props;
    const showOptions = options.map((option, index) => (
      <li key={index}>
        <FontAwesomeIcon className="text-success mr-1" icon={faCheck} />
        {option}
      </li>
    ));

    return (
      <div className="card rounded-bottom rounded-top-0 mb-2 px-2">
        <div className="card-body">
          <h6>{title}</h6>
          <h6 className="text-muted">
            {price} tokens{" "}
            {minutes !== 0 && <span className="ml-2">{minutes} minutes</span>}
          </h6>
          <h6>Offer includes:</h6>
          <ul className="ul-no-bullets text-left pl-0 col-12">{showOptions}</ul>
        </div>
      </div>
    );
  }
}

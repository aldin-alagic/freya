import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export class Offers extends React.PureComponent {
  static propTypes = {
    offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { offers } = this.props;
    return (
      <React.Fragment>
        <h5 className="text-primary bg-light p-2">Offers</h5>
        <div className="d-flex justify-content-around px-4 mt-3 mb-5">
          <div className="mr-4">
            <p className="text-dark font-weight-bold w-100 mb-0">
              Standard package includes:
            </p>
            <ul className="options-list mb-2">
              {offers.standard.options.map((option, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    className="text-success mr-2"
                    icon={faCheck}
                  />
                  {option}
                </li>
              ))}
            </ul>
            <div className="text-left">
              <span className="text-dark font-weight-bold mb-0">
                Price in tokens:
              </span>
              <span> {offers.standard.price}</span>
            </div>
          </div>

          <div>
            <p className="text-dark font-weight-bold w-100 mb-0">
              Premium package includes:
            </p>
            <ul className="options-list mb-2">
              {offers.premium.options.map((option, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    className="text-success mr-2"
                    icon={faCheck}
                  />
                  {option}
                </li>
              ))}
            </ul>
            <div className="text-left">
              <span className="text-dark font-weight-bold mb-0">
                Price in tokens:
              </span>
              <span> {offers.premium.price}</span>
            </div>
            <div className="text-left">
              <span className="text-dark font-weight-bold mb-0">
                Assistance minutes:
              </span>
              <span> {offers.premium.assistanceMinutes}</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

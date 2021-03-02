import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import { OfferCard } from "./offerCard/OfferCard";

export class SolutionOffers extends React.PureComponent {
  static propTypes = {
    offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = { selectedOffer: "standard" };

  onOfferClick = (e) => {
    const selectedOffer = e.target.id;
    this.setState({ selectedOffer });
  };

  getOfferCard = () => {
    const { offers } = this.props;
    const { selectedOffer } = this.state;
    const options = ["Full solution", "All solution attachments"];

    return selectedOffer === "standard" ? (
      <OfferCard
        title="Standard offer"
        options={options}
        price={offers[1].price}
      />
    ) : (
      <OfferCard
        title="Premium offer"
        options={offers[0].additional_package}
        price={offers[0].price}
        minutes={offers[0].assistance_minutes}
      />
    );
  };

  render() {
    return (
      <div className="mt-3 col-xl-3 col-md-12">
        <div className="mx-auto col-md-6 col-xl-12">
          <div
            className="col-12 btn-group btn-group-toggle px-0"
            data-toggle="buttons"
          >
            <label className="card-left-option col-6 btn btn-primary active">
              <input
                type="radio"
                name="offers"
                id="standard"
                autoComplete="off"
                checked
                onClick={this.onOfferClick}
              />
              Standard
            </label>
            <label className="card-right-option col-6 btn btn-primary">
              <input
                type="radio"
                name="offers"
                id="premium"
                autoComplete="off"
                onClick={this.onOfferClick}
              />
              Premium
            </label>
          </div>
          {this.getOfferCard()}
          <div className="row col-12 px-0 mx-0">
            <div className="col-6 pl-0 pr-1 py-1">
              <Link
                className="btn btn-success w-100"
                data-toggle="modal"
                data-target="#solution-checkout-modal"
                to="#"
              >
                Accept
              </Link>
            </div>
            <div className="col-6 pl-1 pr-0 py-1">
              <Link
                className="btn btn-danger w-100"
                data-toggle="modal"
                data-target="#solution-checkout-modal"
                to="#"
              >
                Decline
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

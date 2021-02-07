import React from "react";
import { Link } from "react-router-dom";

import imgTokens from "../../../images/tokens.svg";

export class TokensCard extends React.PureComponent {
  render() {
    return (
      <div className="hvr-float col-md-4 p-2">
        <div className="card h-100">
          <img src={imgTokens} className="card-img-top p-5" alt="User Tokens" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">User Tokens</h5>
            <p className="card-text">How much tokens do you need?</p>
            <input
              name="token-quantity"
              type="number"
              placeholder="1 Token = 1 &euro;"
              min="5"
              className="form-control text-center w-75 mx-auto mb-3"
            />
            <div className="mt-auto d-flex justify-content-center">
              <Link className="btn btn-lg btn-outline-primary px-5" to="/home">
                Purchase
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

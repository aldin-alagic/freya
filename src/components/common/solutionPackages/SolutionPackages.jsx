import React, { useState } from "react";
import { Link } from "react-router-dom";

import { PremiumPackage } from "../premiumPackage/PremiumPackage";
import { StandardPackage } from "../standardPackage/StandardPackage";

export function SolutionPackages() {
  const [packageType, setPackageType] = useState("standard");

  return (
    <div className="mt-3 col-xl-3 col-md-12">
      <div className="mx-auto col-md-6 col-xl-12">
        <button
          className={
            packageType === "standard"
              ? "btn btn-primary card-left-option col-6"
              : "btn btn-outline-primary card-left-option col-6"
          }
          onClick={() => setPackageType("standard")}
        >
          Standard
        </button>
        <button
          className={
            packageType === "premium"
              ? "btn btn-primary card-right-option col-6"
              : "btn btn-outline-primary card-right-option col-6"
          }
          onClick={() => setPackageType("premium")}
        >
          Premium
        </button>
        {packageType === "standard" ? <StandardPackage /> : <PremiumPackage />}
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

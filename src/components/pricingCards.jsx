import React from "react";

import { PricingCard } from "./pricing/PricingCard";

export class PricingCards extends React.PureComponent {
  render() {
    return (
      <div className="row">
        <h3 className="col-12 text-center mb-4">
          Subscription plans for experts
        </h3>
        <PricingCard
          id="pricing-card-basic"
          title="Basic"
          price="0 &euro; / month"
          items={[
            "Publish 10 solution per month",
            "10 bids per month",
            "10 private solutions",
          ]}
          url={"/newsletter"}
          button="Free"
        />

        <PricingCard
          id="pricing-card-business"
          title="Business"
          price="50 &euro; / month"
          items={[
            "Publish 100 solution per month",
            "100 bids per month",
            "100 private solutions",
            "Option to be hired",
            "Analytics dashboard",
            "Support during working hours",
          ]}
          url={"/newsletter"}
          button="Purchase"
        />

        <PricingCard
          id="pricing-card-enterprise"
          title="Enterprise"
          price="100 &euro; / month"
          items={[
            "Publish unlimited solution",
            "Unlimited bids per month",
            "Unlimited private solutions",
            "Option to be hired",
            "Analytics dashboard",
            "Notification for new problems",
            "Monthly reports",
            "24/7 support",
          ]}
          url={"/newsletter"}
          button="Purchase"
        />
      </div>
    );
  }
}

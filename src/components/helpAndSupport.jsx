import React from "react";

import { Card } from "./common/Card";

import imgContactUs from "../images/contact_us.svg";
import imgFaq from "../images/faq.svg";
import imgTicket from "../images/ticket.svg";

export class HelpAndSupport extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Help & Support</h1>
        <hr className="my-5" />
        <div className="row">
          <Card
            image={imgFaq}
            imageStyle="card-img-top p-3"
            url={"/faq"}
            button="FAQ"
            buttonStyle="btn btn-lg btn-outline-primary stretched-link px-5"
          />
          <Card
            image={imgTicket}
            imageStyle="card-img-top p-3"
            url={"/submit-ticket"}
            button="Submit a ticket"
            buttonStyle="btn btn-lg btn-outline-primary stretched-link px-5"
          />
          <Card
            image={imgContactUs}
            imageStyle="card-img-top p-3 pt-4"
            url={"/contact-us"}
            button="Contact us"
            buttonStyle="btn btn-lg btn-outline-primary stretched-link px-5"
          />
        </div>
      </div>
    );
  }
}

import React from "react";

import { ContactForm } from "./contactForm/ContactForm";

export class ContactUs extends React.PureComponent {
  render() {
    return (
      <div>
        <h1 className="mb-5">Contact us</h1>
        <div>
          <div className="row vdivide">
            <ul className="col-md-6 col-sm-12 ul-no-bullets font-weight-bold">
              <li className="mb-2">Registered office</li>
              <li className="mb-2">Street</li>
              <li className="mb-2">Post code</li>
              <li className="mb-2">City</li>
              <li className="mb-2">Country</li>
              <li className="mb-2">VAT number</li>
              <li className="mb-2">support@findaskhire.com</li>
            </ul>
            <hr />
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

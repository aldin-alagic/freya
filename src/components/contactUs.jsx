import React from "react";
import ContactForm from "./contactForm";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact us</h1>
      <div>
        <div className="row vdivide">
          <ContactForm />
          <ul className="col-6 ul-no-bullets font-weight-bold pl-5">
            <li className="mb-2">Registered office</li>
            <li className="mb-2">Street</li>
            <li className="mb-2">Post code</li>
            <li className="mb-2">City</li>
            <li className="mb-2">Country</li>
            <li className="mb-2">VAT number</li>
            <li className="mb-2">support@findaskhire.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

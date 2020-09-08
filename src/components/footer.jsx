import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/dysoridan-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer font-small pt-10">
      <div className="bg-light text-center text-md-left pt-5 pb-2 px-5">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <Link to="/">
              <img src={logo} alt="dysordian-logo" className="w-50" />
            </Link>
          </div>

          <hr className="w-100 d-md-none pb-3" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">About</h5>

            <ul className="list-unstyled">
              <Link className="nav-item nav-link p-0" to="/">
                About us
              </Link>
              <Link className="nav-item nav-link p-0" to="/">
                Contact us
              </Link>
              <Link className="nav-item nav-link p-0" to="/">
                Privacy Policy
              </Link>
              <Link className="nav-item nav-link p-0" to="/">
                User Agreement
              </Link>
            </ul>
          </div>

          <hr className="w-100 d-md-none pb-3" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Support</h5>
            <ul className="list-unstyled">
              <Link className="nav-item nav-link p-0" to="/">
                Help & Support
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-light text-center py-2">
        <hr className="mx-5" />
        <div className="d-flex mx-5">
          <p className="mr-auto">© 2020 Copyright: Dysordian</p>
          <div className="">
            <Link className="text-dark mr-4" to="/">
              <FontAwesomeIcon icon={faNewspaper} size="lg" />
            </Link>
            <Link className="text-dark mr-4" to="/">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Link>
            <Link className="text-dark" to="/">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

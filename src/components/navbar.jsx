import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

export class NavBar extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-10">
        <Link className="navbar-brand" to="/home">
          Find Ask Hire
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <NavLink className="nav-item nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/pricing">
              Pricing
            </NavLink>
            <NavLink className="nav-item nav-link" to="/help-and-support">
              Help & Support
            </NavLink>
            <NavLink className="nav-item nav-link" to="/how-it-works/customer">
              How it works
            </NavLink>
            <NavLink className="nav-item nav-link" to="/solutions/basic">
              Solutions
            </NavLink>
            <NavLink className="nav-item nav-link" to="/issues">
              Issues
            </NavLink>
            <NavLink className="nav-item nav-link" to="/profile/details">
              Profile
            </NavLink>
          </div>
          <div className="navbar-nav">
            {this.props.user ? (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/logout">
                  Logout
                </NavLink>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                  <FontAwesomeIcon
                    className="ml-2"
                    icon={faSignInAlt}
                    size="lg"
                  />
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

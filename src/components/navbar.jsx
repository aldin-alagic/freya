import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
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
          <NavLink className="nav-item nav-link" to="/how-it-works">
            How it works
          </NavLink>
          <NavLink className="nav-item nav-link" to="/find-solution">
            Solutions
          </NavLink>
          <NavLink className="nav-item nav-link" to="/issues">
            Issues
          </NavLink>
          <NavLink className="nav-item nav-link" to="/profile">
            Profile
          </NavLink>
        </div>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/home">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

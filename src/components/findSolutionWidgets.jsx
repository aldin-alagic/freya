import React from "react";
import DropDownCard from "./common/dropDownCard";
import { NavLink, Link } from "react-router-dom";

const FindSolutionWidgets = () => {
  return (
    <div className="col-md-3">
      <div className="d-flex justify-content-between mb-4">
        <NavLink className="btn btn-outline-primary col-md-12" to="/home">
          Purchased Solutions
        </NavLink>
      </div>
      <section
        className="accordion-section clearfix mt-4"
        aria-label="Question Accordions"
      >
        <div
          className="panel-group"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          <DropDownCard
            id="11"
            title="Custom filters"
            content={
              <Link className="nav nav-link" to="/">
                Create a custom filter
              </Link>
            }
            titleStyle="collapsed drop-down-card-sidebar"
          />
          <DropDownCard
            id="12"
            title="Ignored tags"
            content={
              <Link className="nav nav-link" to="/">
                Add an ignored tag
              </Link>
            }
            titleStyle="collapsed drop-down-card-sidebar"
          />
        </div>
      </section>
    </div>
  );
};

export default FindSolutionWidgets;

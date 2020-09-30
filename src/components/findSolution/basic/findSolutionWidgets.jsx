import React from "react";
import { Link } from "react-router-dom";
import DropDownCard from "./../../common/dropDownCard";

const FindSolutionWidgets = () => {
  return (
    <div className="col-md-3">
      <hr className="d-block d-sm-none" />
      <section
        className="accordion-section clearfix"
        aria-label="Question Accordions"
      >
        <div
          className="panel-group"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          <h4 className="mb-2">Additional options</h4>
          <DropDownCard
            id="11"
            title="Custom filters"
            titleStyle="collapsed drop-down-card-sidebar"
          >
            <Link className="nav nav-link" to="/">
              Create a custom filter
            </Link>
          </DropDownCard>
        </div>
      </section>
    </div>
  );
};

export default FindSolutionWidgets;

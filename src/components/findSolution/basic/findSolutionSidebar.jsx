import React, { Fragment } from "react";
import DropDownCard from "./../../common/dropDownCard";
import Select from "./../../common/select";

const FindSolutionSideBar = () => {
  return (
    <div className="col-md-3">
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
          <h4 className="mb-2">Select your vehicle</h4>
          <DropDownCard
            id="0"
            title="Brand"
            content={
              <Select
                name="brand"
                value=""
                label=""
                options={[
                  { id: 0, text: "BMW" },
                  { id: 1, text: "Audi" },
                  { id: 2, text: "Volkswagen" },
                  { id: 3, text: "Mercedes" },
                ]}
              />
            }
            titleStyle="collapsed drop-down-card-sidebar"
          />
          <DropDownCard
            id="1"
            title="Model"
            content={
              <Select
                name="model"
                value=""
                label=""
                options={[
                  { id: 0, text: "C200" },
                  { id: 1, text: "E220" },
                ]}
              />
            }
            titleStyle="collapsed drop-down-card-sidebar"
          />
          <DropDownCard
            id="2"
            title="Year"
            content={
              <Select
                name="year"
                value=""
                label=""
                options={[
                  { id: 0, text: "2018" },
                  { id: 1, text: "2019" },
                  { id: 2, text: "2020" },
                ]}
              />
            }
            titleStyle="collapsed drop-down-card-sidebar"
          />
          <h4 className="mb-2">Select your issue</h4>
          <DropDownCard
            id="3"
            title="Issue type"
            content={
              <Fragment>
                <Select
                  name="issueType"
                  label=""
                  options={[
                    { id: 0, text: "Interior" },
                    { id: 1, text: "Engine" },
                    { id: 2, text: "Body and exterior" },
                    { id: 3, text: "Control and suspension" },
                  ]}
                />
                <Select
                  name="issueSubType"
                  label=""
                  options={[
                    { id: 0, text: "Cockpit module" },
                    { id: 1, text: "Seat" },
                    { id: 2, text: "Instrument switch" },
                  ]}
                />
              </Fragment>
            }
            titleStyle="collapsed drop-down-card-sidebar"
          />
          <h4 className="mb-2">Additional Filters</h4>
          <DropDownCard
            id="4"
            title="Filters"
            content={
              <Select
                name="filter"
                label=""
                options={[{ id: 0, text: "Price" }]}
              />
            }
            titleStyle="collapsed drop-down-card-sidebar"
          />
        </div>
      </section>
      <button className="btn btn-primary col-md-12">Find</button>
    </div>
  );
};

export default FindSolutionSideBar;

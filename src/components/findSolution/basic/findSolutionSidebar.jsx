import React, { Fragment } from "react";
import DropDownCard from "./../../common/dropDownCard";
import SelectBox from "./../../common/selectBox";

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
            titleStyle="collapsed drop-down-card-sidebar"
          >
            <SelectBox
              name="brand"
              placeholder="Brand"
              options={[
                { value: 0, label: "BMW" },
                { value: 1, label: "Audi" },
                { value: 2, label: "Volkswagen" },
                { value: 3, label: "Mercedes" },
              ]}
            />
          </DropDownCard>
          <DropDownCard
            id="1"
            title="Model"
            titleStyle="collapsed drop-down-card-sidebar"
          >
            <SelectBox
              name="model"
              placeholder="Model"
              options={[
                { value: 0, label: "C200" },
                { value: 1, label: "E220" },
              ]}
            />
          </DropDownCard>
          <DropDownCard
            id="2"
            title="Year"
            titleStyle="collapsed drop-down-card-sidebar"
          >
            <SelectBox
              name="year"
              placeholder="Year"
              options={[
                { value: 0, label: "2018" },
                { value: 1, label: "2019" },
                { value: 2, label: "2020" },
              ]}
            />
          </DropDownCard>
          <h4 className="mb-2">Select your issue</h4>
          <DropDownCard
            id="3"
            title="Issue type"
            titleStyle="collapsed drop-down-card-sidebar"
          >
            <Fragment>
              <SelectBox
                name="issueType"
                placeholder="Issue type"
                options={[
                  { value: 0, label: "Interior" },
                  { value: 1, label: "Engine" },
                  { value: 2, label: "Body and exterior" },
                  { value: 3, label: "Control and suspension" },
                ]}
              />
              <SelectBox
                name="issueSubType"
                placeholder="Category"
                options={[
                  { value: 0, label: "Cockpit module" },
                  { value: 1, label: "Seat" },
                  { value: 2, label: "Instrument switch" },
                ]}
              />
            </Fragment>
          </DropDownCard>
          <h4 className="mb-2">Additional Filters</h4>
          <DropDownCard
            id="4"
            title="Filters"
            titleStyle="collapsed drop-down-card-sidebar"
          >
            <SelectBox
              name="filter"
              placeholder="Price"
              options={[{ value: 0, label: "Price" }]}
            />
          </DropDownCard>
        </div>
      </section>
      <button className="btn btn-primary col-md-12">Find</button>
    </div>
  );
};

export default FindSolutionSideBar;

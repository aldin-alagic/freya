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
            titleStyle="collapsed drop-down-card-sidebar"
          >
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
              data-size="5"
              data-live-search
              data-show-tick
              data-width="100%"
              data-virtual-scroll="20"
            />
          </DropDownCard>
          <DropDownCard
            id="1"
            title="Model"
            titleStyle="collapsed drop-down-card-sidebar"
          >
            <Select
              name="model"
              value=""
              label=""
              options={[
                { id: 0, text: "C200" },
                { id: 1, text: "E220" },
              ]}
              data-size="5"
              data-live-search
              data-show-tick
              data-width="100%"
              data-virtual-scroll="20"
            />
          </DropDownCard>
          <DropDownCard
            id="2"
            title="Year"
            titleStyle="collapsed drop-down-card-sidebar"
          >
            <Select
              name="year"
              label=""
              options={[
                { id: 0, text: "2018" },
                { id: 1, text: "2019" },
                { id: 2, text: "2020" },
              ]}
              data-size="5"
              data-live-search
              data-show-tick
              data-width="100%"
              data-virtual-scroll="20"
            />
          </DropDownCard>
          <h4 className="mb-2">Select your issue</h4>
          <DropDownCard
            id="3"
            title="Issue type"
            titleStyle="collapsed drop-down-card-sidebar"
          >
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
                data-size="5"
                data-live-search
                data-show-tick
                data-width="100%"
                data-virtual-scroll="20"
              />
              <Select
                name="issueSubType"
                label=""
                options={[
                  { id: 0, text: "Cockpit module" },
                  { id: 1, text: "Seat" },
                  { id: 2, text: "Instrument switch" },
                ]}
                data-size="5"
                data-live-search
                data-show-tick
                data-width="100%"
                data-virtual-scroll="20"
              />
            </Fragment>
          </DropDownCard>
          <h4 className="mb-2">Additional Filters</h4>
          <DropDownCard
            id="4"
            title="Filters"
            titleStyle="collapsed drop-down-card-sidebar"
          >
            <Select
              name="filter"
              label=""
              options={[{ id: 0, text: "Price" }]}
              data-size="5"
              data-live-search
              data-show-tick
              data-width="100%"
              data-virtual-scroll="20"
            />
          </DropDownCard>
        </div>
      </section>
      <button className="btn btn-primary col-md-12">Find</button>
    </div>
  );
};

export default FindSolutionSideBar;

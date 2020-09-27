import React from "react";
import { Link } from "react-router-dom";
import Input from "../../common/input";
import DropDownCard from "./../../common/dropDownCard";
import Modal from "./../../common/modal";
import Select from "./../../common/select";

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
          <DropDownCard
            id="12"
            title="Ignored tags"
            titleStyle="collapsed drop-down-card-sidebar"
          >
            <Link to="#" data-toggle="modal" data-target="#ignore-tag-modal">
              Add a tag
            </Link>
          </DropDownCard>
        </div>
      </section>
      <Modal id="ignore-tag-modal" title="Tag ignore" button="Add">
        <div className="m-2">
          <Select
            name="tag"
            label="Ignore the following tag:"
            options={[
              { id: 0, text: "Mercedes" },
              { id: 1, text: "Automatic" },
              { id: 2, text: "C200" },
              { id: 3, text: "Engine" },
              { id: 4, text: "2016" },
              { id: 5, text: "2015" },
              { id: 6, text: "Diesel" },
            ]}
            data-size="5"
            data-live-search
            data-show-tick
            data-width="100%"
            data-virtual-scroll="20"
          />
        </div>
      </Modal>
    </div>
  );
};

export default FindSolutionWidgets;

import React from "react";
import { Link } from "react-router-dom";
import Input from "../common/input";
import DropDownCard from "../common/dropDownCard";
import Modal from "../common/modal";

const Widgets = () => {
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
            <Link
              className="nav nav-link"
              data-toggle="modal"
              data-target="#custom-filter-modal"
              to="#"
            >
              Add the current filter
            </Link>
          </DropDownCard>
          <DropDownCard
            id="12"
            title="Most searches"
            titleStyle="collapsed drop-down-card-sidebar"
          >
            Tesla/Model3
          </DropDownCard>
        </div>
      </section>
      <Link className="btn btn-primary col-md-12" to="/home">
        New issue
      </Link>
      <Modal
        id="custom-filter-modal"
        title="Add the current filter"
        button="Save"
      >
        <div className="m-2">
          <Input
            name="filter"
            label="Filter name:"
            styleLabel=""
            styleInput="form-control"
            type="text"
            placeholder="Give your custom filter a name"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Widgets;

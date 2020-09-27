import React from "react";
import DropDownCard from "./common/dropDownCard";

const FAQ = () => {
  return (
    <div className="w-100">
      <h1 className="mb-5">Frequently Asked Questions</h1>
      <button className="btn btn-primary col-md-2 mr-2 mb-2">Customer</button>
      <button className="btn btn-outline-primary col-md-2 mb-2">Expert</button>
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
            id="0"
            title="What kind of payment is possible?"
            titleStyle="collapsed drop-down-card-faq"
          >
            Find Ask Hire is a online platform which helps users to solve their
            problems. You can find solutions by searching them or by challagning
            our experts by creating a post with description of a problem. In
            case problem on platform. In case you still need help you can always
            hire one of our filed experts for extra help.
          </DropDownCard>
          <DropDownCard
            id="1"
            title="What are tokens?"
            titleStyle="collapsed drop-down-card-faq"
          >
            Find Ask Hire is a online platform which helps users to solve their
            problems. You can find solutions by searching them or by challagning
            our experts by creating a post with description of a problem. In
            case problem on platform. In case you still need help you can always
            hire one of our filed experts for extra help.
          </DropDownCard>
          <DropDownCard
            id="2"
            title="What kind of payment is possible?"
            titleStyle="collapsed drop-down-card-faq"
          >
            Find Ask Hire is a online platform which helps users to solve their
            problems. You can find solutions by searching them or by challagning
            our experts by creating a post with description of a problem. In
            case problem on platform. In case you still need help you can always
            hire one of our filed experts for extra help.
          </DropDownCard>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

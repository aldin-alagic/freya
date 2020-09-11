import React from "react";
import TicketForm from "./ticketForm";

const SubmitTicket = () => {
  return (
    <div className="w-100">
      <h1 className="mb-5">Submit a ticket</h1>
      <p className="text-justify mb-5">
        When submitting a ticket to our Technical Support, please be aware of
        the following: This is a general technical support category and tickets
        into it should be submitted only if you can find answer on our
        Frequently Asked Questions section.
        <br />
        <br />
        Tickets into this category are being served 24/7/365 by our professional
        and highly qualified Technical Support Team. When submitting a ticket,
        please be as specific as possible when you are describing your inquiry
        -- the more information our Technical Support Team has on a case, the
        faster and accurate response or resolution you will receive.
        <br />
        <br />
        Please, be tolerant to response time of cases, which you are informed it
        is being worked on or contain multiple requests at a time. Our Team is
        known in the industry to never give up on an issue or reject a request,
        however there are cases in which a bit more time than the usual is
        needed for something to be resolved or replied to in an accurate manner.
      </p>
      <hr />
      <TicketForm />
    </div>
  );
};

export default SubmitTicket;

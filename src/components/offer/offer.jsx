import React from "react";
import { Redirect, Route } from "react-router-dom";
import Overview from "./overview";
import Menu from "./menu";
import Expert from "./../common/expert";
import Attachments from "./../common/attachments";
import SolutionPackages from "./../common/solutionPackages";
import Modal from "./../common/modal";
import Message from "./message";

const Offer = () => {
  const solution = {
    title: "Transmission problem",
    description:
      "We were riding down Highway 146 when the engine revved up and there was no power to the wheels. We gilded off the road. The transmission or torque converter was gone. There has been an ACURA Service bulletin 02-027 date 2/05/2008 on 2003 ACURA transmissions. ACURA has established a mileage and time ....",
    sales: "100",
    views: "404",
  };
  return (
    <div className="row">
      <div className="col-md-12 col-xl-9">
        <div className="row pl-3 px-md-3 ">
          <h4 className="mr-auto">{solution.title}</h4>
        </div>
        <h6 className="mt-4 mb-3 ml-2">Offer from Expert XYZ</h6>
        <hr className="mb-0" />
        <Menu />
        <hr className="mt-0 mb-4" />
        <Route path="/offers/:id/overview" component={Overview} />
        <Route path="/offers/:id/attachments/" component={Attachments} />
        <Route path="/offers/:id/expert/" component={Expert} />
        <Route path="/offers/:id/message/" component={Message} />
        <Redirect to="/offers/:id/overview" />
      </div>
      <SolutionPackages />
      <Modal
        id="solution-checkout-modal"
        title="Checkout"
        button="Add to basket"
      >
        <div className="m-2">
          <h6 className="text-justify">
            By confirming below you accept to purchase this solution with your
            tokens.
          </h6>
        </div>
      </Modal>
    </div>
  );
};
export default Offer;

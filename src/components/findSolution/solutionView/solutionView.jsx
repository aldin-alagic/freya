import React from "react";
import { Redirect, Route } from "react-router-dom";
import Overview from "./overview";
import Menu from "./menu";
import Modal from "../../common/modal";
import Description from "./../../common/description";
import Attachments from "./../../common/attachments";
import Expert from "./../../common/expert";
import SolutionPackages from "./../../common/solutionPackages";
import Solution from "../../data/solution";

const SolutionView = () => {
  const solution = new Solution(
    "Transmission problem",
    "We were riding down Highway 146 when the engine revved up and there was no power to the wheels. We gilded off the road. The transmission or torque converter was gone. There has been an ACURA Service bulletin 02-027 date 2/05/2008 on 2003 ACURA transmissions. ACURA has established a mileage and time ....",
    "We were riding down Highway 146 when the engine revved up and there was no power to the wheels. We gilded off the road. The transmission or torque converter was gone. There has been an ACURA Service bulletin 02-027 date 2/05/2008 on 2003 ACURA transmissions. ACURA has established a mileage and time ....",
    "No side effects",
    "250",
    "300",
    "10",
    "2",
    "100",
    "404"
  );
  return (
    <div className="row">
      <div className="col-md-12 col-xl-9">
        <div className="row pl-3 px-md-3 ">
          <h4 className="mr-auto">{solution.title}</h4>
          <div className="text-secondary">
            <span className="m-1">{solution.sales} sold</span>
            <span className="m-1">{solution.views} views</span>
          </div>
        </div>
        <hr className="mt-3 mb-0" />
        <Menu likes={solution.likes} dislikes={solution.dislikes} />
        <hr className="mt-0 mb-4" />
        <Route path="/solution/test/overview" component={Overview} />
        <Route path="/solution/test/description" component={Description} />
        <Route path="/solution/test/attachments" component={Attachments} />
        <Route path="/solution/test/expert" component={Expert} />
        <Redirect to="/solution/test/overview" component={Overview} />
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
export default SolutionView;

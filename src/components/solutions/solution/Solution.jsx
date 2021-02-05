import React from "react";
import { Route } from "react-router-dom";
import { toast } from "react-toastify";

import { Overview } from "./Overview";
import { Menu } from "./Menu";
import { Modal } from "../../common/Modal";
import { Description } from "../../common/Description";
import { Attachments } from "../../common/Attachments";
import { Expert } from "../../common/Expert";
import { SolutionPackages } from "../../common/SolutionPackages";
import solutionService from "../../../services/solutionService";
import userService from "../../../services/userService";

export class Solution extends React.Component {
  state = { solutionId: null, data: {} };

  componentDidMount() {
    let { id } = this.props.match.params;
    this.getSolution(id);
  }

  getSolution = async (id) => {
    const { data: response } = await solutionService.getSolution(id);
    if (response.status == 200) {
      toast.success(response.message, { className: "alert-success" });
      const data = response.data;
      console.log(data);
      this.setState({ data });
    } else {
      userService.logout();
      toast.error(response.message, { className: "alert-danger" });
    }
  };

  render() {
    const solution = {
      title: "Transmission problem",
      description:
        "We were riding down Highway 146 when the engine revved up and there was no power to the wheels. We gilded off the road. The transmission or torque converter was gone. There has been an ACURA Service bulletin 02-027 date 2/05/2008 on 2003 ACURA transmissions. ACURA has established a mileage and time ....",
      likes: "10",
      dislikes: "2",
      sales: "100",
      views: "404",
    };

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
          <Route path={"/solution/:id/overview"} component={Overview} />
          <Route path={"/solution/:id/description"} component={Description} />
          <Route path={"/solution/:id/attachments"} component={Attachments} />
          <Route path={"/solution/:id/expert"} component={Expert} />
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
  }
}

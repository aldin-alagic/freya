import React, { Component } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import SolutionStandard from "./solutionStandard";
import SolutionPremium from "./solutionPremium";
import Solution from "../../data/solution";
import Overview from "./overview";
import Description from "./description";
import Attachments from "./attachments";
import Expert from "./expert";
import Menu from "./menu";

class SolutionView extends Component {
  state = { packageType: "standard" };

  handleSidebarClick = (target) => {
    this.setState({ packageType: target });
  };

  renderSidebar() {
    if (this.state.packageType === "standard") {
      return (
        <div className="col-md-3">
          <button
            className="btn btn-primary rounded-0 col-6"
            onClick={() => {
              this.handleSidebarClick("standard");
            }}
          >
            Standard
          </button>
          <button
            className="btn btn-outline-primary rounded-0 col-6"
            onClick={() => {
              this.handleSidebarClick("premium");
            }}
          >
            Premium
          </button>
          <SolutionStandard />
          <Link className="btn btn-primary col-12 m-0" to="/">
            Purchase
          </Link>
        </div>
      );
    }
    return (
      <div className="col-md-3">
        <button
          className="btn btn-outline-primary rounded-0 col-6"
          onClick={() => {
            this.handleSidebarClick("standard");
          }}
        >
          Standard
        </button>
        <button
          className="btn btn-primary rounded-0 col-6"
          onClick={() => {
            this.handleSidebarClick("premium");
          }}
        >
          Premium
        </button>
        <SolutionPremium />
        <Link className="btn btn-primary col-12 m-0" to="/">
          Purchase
        </Link>
      </div>
    );
  }

  render() {
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
        <div className="col-md-9">
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
          <Route path="/solution/test/standard/overview" component={Overview} />
          <Route
            path="/solution/test/standard/description"
            component={Description}
          />
          <Route
            path="/solution/test/standard/attachments"
            component={Attachments}
          />
          <Route path="/solution/test/standard/expert" component={Expert} />
          <Redirect
            to="/solution/test/standard/overview"
            component={Overview}
          />
        </div>
        {this.renderSidebar()}
      </div>
    );
  }
}

export default SolutionView;

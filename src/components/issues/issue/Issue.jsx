import React from "react";
import { Link, Redirect, Route } from "react-router-dom";

import { Overview } from "./Overview";
import { Menu } from "./Menu";
import { Offers } from "./Offers";
import { SwitchBox } from "../../common/SwitchBox";
import { Attachments } from "../../common/Attachments";
import { Description } from "./Description";
import { Activities } from "./Activities";
import { Advertise } from "./Advertise";

export class Issue extends React.PureComponent {
  render() {
    const solution = {
      title: "Transmission problem",
      description:
        "We were riding down Highway 146 when the engine revved up and there was no power to the wheels. We gilded off the road. The transmission or torque converter was gone. There has been an ACURA Service bulletin 02-027 date 2/05/2008 on 2003 ACURA transmissions. ACURA has established a mileage and time ....",
      views: 400,
      offers: 5,
    };

    return (
      <div className="row">
        <div className="col-12">
          <div className="row px-0">
            <h4 className="mx-3 mr-auto">{solution.title}</h4>
            <div className="d-flex text-secondary align-content-center mx-3">
              <span className="m-1">{solution.views} views</span>
              <span className="m-1">{solution.offers} offers</span>
            </div>
          </div>
          <hr className="mt-4 mb-3" />
          <div className="d-flex">
            <Link className="btn btn-primary px-4 m-1 mr-auto" to="/home">
              Edit
            </Link>
            <div className="d-flex my-2">
              <span className="mt-1 mr-3">Published</span>
              <SwitchBox name="published" />
            </div>
          </div>
          <hr className="mt-3 mb-0" />
          <Menu />
          <hr className="mt-0 mb-4" />
          <Route path="/issues/test/overview" component={Overview} />
          <Route path="/issues/test/description" component={Description} />
          <Route path="/issues/test/attachments" component={Attachments} />
          <Route path="/issues/test/offers" component={Offers} />
          <Route path="/issues/test/activities" component={Activities} />
          <Route path="/issues/test/advertise" component={Advertise} />
          <Redirect to="/issues/test/overview" />
        </div>
      </div>
    );
  }
}

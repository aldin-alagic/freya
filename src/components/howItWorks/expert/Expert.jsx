import React from "react";

import { ExpertSmallCards } from "../../common/expertSmallCards/ExpertSmallCards";

import stock1 from "../../../images/stock1.svg";
import stock2 from "../../../images/stock2.svg";

export class Expert extends React.PureComponent {
  render() {
    return (
      <div className="animate__animated animate__fadeInLeft">
        <h4 className="mb-4">How our platform works?</h4>
        <div className="row">
          <p className="col-md-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tempor laoreet turpis, nec euismod erat pretium id. Integer sodales
            vestibulum tellus, sed tempor lectus sodales a. Phasellus facilisis
            enim turpis, eget luctus purus malesuada quis. In sollicitudin
            aliquam neque ut condimentum. Curabitur tempor justo quis ultricies
            vehicula. Nulla et quam ex. In vitae eros sed risus volutpat
            condimentum at sit amet sapien. Sed sit amet nisl volutpat,
            scelerisque nulla sed, tristique ligula. Fusce in rhoncus lorem, nec
            pulvinar tellus. Sed at dictum odio. Proin turpis sapien, egestas
            dapibus leo in, vulputate cursus velit.
          </p>
          <img className="col-md-6 pl-5" src={stock1} alt="explanation" />
        </div>
        <hr className="my-5" />
        <h4 className="mb-4">Why should you use it?</h4>
        <ExpertSmallCards />
        <hr className="my-5" />
        <img className="col-12 p-5" src={stock2} alt="explanation" />
      </div>
    );
  }
}

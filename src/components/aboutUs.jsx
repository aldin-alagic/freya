import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

import imgTeam from "../images/team.svg";
import imgSocialNetworks from "../images/social_networks.svg";

export class AboutUs extends React.PureComponent {
  render() {
    return (
      <div className="w-100">
        <h1>About us</h1>
        <div className="d-flex justify-content-center my-3">
          <img className="w-50" src={imgTeam} alt="team" />
        </div>
        <h4>Company overview</h4>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          laoreet turpis, nec euismod erat pretium id. Integer sodales
          vestibulum tellus, sed tempor lectus sodales a. Phasellus facilisis
          enim turpis, eget luctus purus malesuada quis. In sollicitudin aliquam
          neque ut condimentum. Curabitur tempor justo quis ultricies vehicula.
          Nulla et quam ex. In vitae eros sed risus volutpat condimentum at sit
          amet sapien. Sed sit amet nisl volutpat, scelerisque nulla sed,
          tristique ligula. Fusce in rhoncus lorem, nec pulvinar tellus. Sed at
          dictum odio. Proin turpis sapien, egestas dapibus leo in, vulputate
          cursus velit.
          <br />
          <br />
          Suspendisse potenti. Ut vel maximus nunc. Sed condimentum leo in augue
          pellentesque, nec lacinia elit efficitur. Nunc vulputate metus a ipsum
          facilisis, nec interdum elit iaculis. Quisque in metus id augue
          vulputate fermentum. In accumsan, erat eget tempor placerat, nisi
          libero pellentesque sem, gravida lacinia nulla leo a justo. Donec nec
          rutrum nunc, eget accumsan lorem. Vestibulum eget hendrerit nibh.
        </p>
        <h4>
          Visit us on social media
          <Link className="ml-4 mr-3" to="/">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </h4>

        <div className="d-flex justify-content-center my-5">
          <img className="w-50" src={imgSocialNetworks} alt="social networks" />
        </div>
      </div>
    );
  }
}

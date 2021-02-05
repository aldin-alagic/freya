import React from "react";
import { PropTypes } from "prop-types";

export class SmallCard extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  };

  render() {
    const { title, text, icon } = this.props;

    return (
      <div className="card h-100">
        <div className="card-body h-100">
          <div className="media d-flex h-100">
            <div className="align-self-center col-3">{icon}</div>
            <div className="media-body col-9">
              <h6>{title}</h6>
              <span className="text-justify">{text}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

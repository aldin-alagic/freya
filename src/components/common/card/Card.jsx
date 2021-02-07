import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export class Card extends React.PureComponent {
  static propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    imageStyle: PropTypes.string,
    url: PropTypes.string,
    button: PropTypes.string,
    id: PropTypes.string.isRequired,
    image: PropTypes.element.isRequired,
  };

  static defaultProps = {
    imageStyle: "card-img-top p-3",
  };

  render() {
    const {
      id,
      date,
      title,
      text,
      image,
      imageStyle,
      url,
      button,
    } = this.props;

    return (
      <div id={id} className="hvr-float col-md-4 p-2">
        <div className="card h-100">
          <img src={image} className={imageStyle} alt={title} />
          <div className="card-body d-flex flex-column">
            {date && <p>{date}</p>}
            {title && <h5 className="card-title">{title}</h5>}
            {text && <p className="card-text">{text}</p>}
            <div className="mt-auto d-flex justify-content-center">
              {url && (
                <Link
                  className="btn btn-lg btn-outline-primary stretched-link px-5"
                  to={url}
                >
                  {button}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

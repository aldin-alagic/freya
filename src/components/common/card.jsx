import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  date,
  title,
  text,
  image,
  imageStyle,
  url,
  button,
  buttonStyle,
  input,
  ...rest
}) => {
  return (
    <div id={id} className="hvr-float col-md-4 p-2" {...rest}>
      <div className="card h-100">
        <img src={image} className={imageStyle} alt={title} />
        <div className="card-body d-flex flex-column">
          <p>{date}</p>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          {input}
          <div className="mt-auto d-flex justify-content-center">
            <Link className={buttonStyle} to={url}>
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

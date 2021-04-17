import React from "react";
import { PropTypes } from "prop-types";

export class ItemList extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { title, items } = this.props;
    const showItems = items.map((item, index) => (
      <span
        key={index}
        className="badge badge-pill badge-secondary px-4 py-2 m-1"
      >
        {item}
      </span>
    ));

    return (
      <React.Fragment>
        <h5 className="text-primary bg-light p-2">{title}</h5>
        <div className="row justify-content-start px-4 my-3">
          {items.length > 0 ? (
            showItems
          ) : (
            <span>{title} have not been added</span>
          )}
        </div>
      </React.Fragment>
    );
  }
}

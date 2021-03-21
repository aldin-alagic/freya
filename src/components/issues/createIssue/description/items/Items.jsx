import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CSSTransitionGroup } from "react-transition-group";

import "./Items.css";

export class Items extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    register: PropTypes.func.isRequired,
    onItemsClick: PropTypes.func.isRequired,
  };

  render() {
    const { name, label, items, register, onItemsClick } = this.props;

    const showItems = items.map((value) => (
      <div className="my-1 mr-2" key={value}>
        <div className="bg-secondary text-white rounded-left-badge">
          {value}
        </div>
        <button
          type="button"
          className="remove-item-btn"
          onClick={() => onItemsClick("REMOVE", name, value)}
        >
          <FontAwesomeIcon icon={faTimes} size="sm" fixedWidth />
        </button>
      </div>
    ));

    return (
      <React.Fragment>
        <div className="form-group col-12 px-0 mb-2">
          <label className="text-dark font-weight-bold" htmlFor={name}>
            {label}
          </label>
          <div className="input-group">
            <input
              name={name}
              id={name}
              className="form-control"
              type="text"
              ref={register}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onItemsClick("ADD", name)}
              >
                <FontAwesomeIcon
                  className="text-white"
                  icon={faPlus}
                  size="lg"
                />
              </button>
            </div>
          </div>
        </div>
        <CSSTransitionGroup
          component="div"
          className="row col-12 px-3 mb-4"
          transitionName={{
            appear: "animate__animated",
            appearActive: "animate__fadeInDown",
            enter: "animate__animated",
            enterActive: "animate__fadeInDown",
            leave: "animate__flipOutX",
          }}
          transitionEnterTimeout={0}
          transitionAppearTimeout={0}
          transitionLeaveTimeout={0}
        >
          {showItems}
        </CSSTransitionGroup>
      </React.Fragment>
    );
  }
}

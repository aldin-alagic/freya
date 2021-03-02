import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CSSTransitionGroup } from "react-transition-group";
import { InputGroup } from "./../../../../common/formNew/inputGroup/InputGroup";

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
        <InputGroup
          name={name}
          label={label}
          register={register}
          onClick={onItemsClick}
          style="form-group col-12 px-0 mb-2"
        />
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

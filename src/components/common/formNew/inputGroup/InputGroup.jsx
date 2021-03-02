import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export class InputGroup extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.object.isRequired,
    register: PropTypes.object.isRequired,
    style: PropTypes.string.isRequired,
  };

  static defaultProps = {
    placeholder: "",
  };

  render() {
    const {
      name,
      type,
      placeholder,
      label,
      onClick,
      register,
      style,
    } = this.props;

    return (
      <div className={style}>
        <label className="text-dark font-weight-bold" htmlFor={name}>
          {label}
        </label>
        <div className="input-group">
          <input
            name={name}
            id={name}
            placeholder={placeholder}
            className="form-control"
            type={type}
            ref={register}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onClick("ADD", name)}
            >
              <FontAwesomeIcon className="text-white" icon={faPlus} size="lg" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

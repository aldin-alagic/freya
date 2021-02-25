import React from "react";
import { PropTypes } from "prop-types";

export class Options extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    register: PropTypes.func.isRequired,
  };

  render() {
    const { type, options, register } = this.props;

    const showOptions = options.map((option, index) => (
      <div key={index} className="col-sm-6 col-md-3">
        <div key={index} className="form-check m-2">
          <input
            type="radio"
            id={`${type}-${index}`}
            name={type}
            className="form-check-input"
            value={option}
            ref={register}
          />
          <label className="form-check-label" htmlFor={type}>
            {option}
          </label>
        </div>
      </div>
    ));

    return showOptions;
  }
}

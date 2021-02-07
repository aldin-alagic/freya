import React from "react";
import { PropTypes } from "prop-types";

export class File extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
  };

  static defaultProps = {
    value: "",
  };

  render() {
    const { name, value, label, onChange, error } = this.props;

    return (
      <div className="input-group row mx-0 mb-4">
        <div className="custom-file">
          <input
            name={name}
            id={name}
            type="file"
            className="custom-file-input  hv-pointer"
            value={value}
            onChange={onChange}
          />
          {label && (
            <label className="custom-file-label" htmlFor={name}>
              {label}
            </label>
          )}
        </div>
        {error && <div className="alert alert-danger mt-1">{error}</div>}
      </div>
    );
  }
}

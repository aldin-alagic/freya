import React from "react";
import { PropTypes } from "prop-types";

export class TextArea extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    columns: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    value: PropTypes.node,
    label: PropTypes.string,
    styleLabel: PropTypes.string,
    styleTextArea: PropTypes.string,
    error: PropTypes.string,
  };

  render() {
    const {
      name,
      label,
      columns,
      rows,
      error,
      styleLabel,
      styleTextArea,
      onChange,
      value,
    } = this.props;

    return (
      <div className="form-group row mx-0 px-0 mb-4 col-12">
        {label && (
          <label htmlFor={name} className={styleLabel}>
            {label}
          </label>
        )}
        <textarea
          id={name}
          name={name}
          cols={columns}
          rows={rows}
          className={styleTextArea}
          onChange={onChange}
          value={value}
        ></textarea>
        {error && <div className="alert alert-danger mt-1">{error}</div>}
      </div>
    );
  }
}

import React from "react";
import { PropTypes } from "prop-types";

import { Input } from "../input/Input";

export class SearchBox extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { value, onChange } = this.props;

    return (
      <Input
        type="text"
        name="query"
        styleInput="form-control mb-2"
        placeholder="Quick search..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    );
  }
}

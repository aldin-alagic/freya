import React from "react";
import { PropTypes } from "prop-types";

import { SwitchBox } from "../../common/SwitchBox";

export class Visibility extends React.PureComponent {
  static propTypes = {
    published: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { published, onChange } = this.props;

    return (
      <div className="card mb-4">
        <div className="card-header bg-light">Visibility</div>
        <div className="card-body row justify-content-start px-5">
          <div className="d-flex col-md-2 my-2">
            <span className="mt-1 mr-3">Published</span>
            <SwitchBox
              name="published"
              checked={published == true ? "checked" : ""}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import { PropTypes } from "prop-types";

export class Modal extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    children: PropTypes.element,
    small: PropTypes.bool,
  };

  static defaultProps = {
    small: true,
  };

  render() {
    const { id, title, children: content, button, small } = this.props;

    let dialogClasses = "modal-dialog modal-dialog-centered";
    if (small) dialogClasses = "modal-dialog modal-sm modal-dialog-centered";

    return (
      <div
        className="modal animate__animated animate__fadeInDown"
        id={id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby={id + "Label"}
        aria-hidden="true"
      >
        <div className={dialogClasses} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalWindowLongTitle">
                {title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                {button}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
import React from "react";
import { PropTypes } from "prop-types";

export class DropDownCard extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    titleStyle: PropTypes.string,
    hidden: PropTypes.bool,
  };

  static defaultProps = {
    titleStyle: "drop-down-card-faq",
    hidden: true,
  };

  render() {
    const {
      id,
      title,
      titleStyle,
      children: content,
      hidden = true,
    } = this.props;

    const idHeading = `heading-${id}`;
    const idCollapse = `collapse-${id}`;
    const href = `#${idCollapse}`;
    let panelStyle = "panel-collapse";
    if (hidden) panelStyle += " collapse";

    return (
      <div className="panel panel-default">
        <div className="panel-heading p-3 mb-3" role="tab" id={idHeading}>
          <h3 className="panel-title mb-0">
            <a
              className={titleStyle}
              role="button"
              data-toggle="collapse"
              data-parent="#accordion"
              href={href}
              aria-expanded="false"
              aria-controls={idCollapse}
            >
              {title}
            </a>
          </h3>
        </div>
        <div
          id={idCollapse}
          className={panelStyle}
          role="tabpanel"
          aria-labelledby={idHeading}
        >
          <div className="panel-body px-3 mb-4 text-justify">{content}</div>
        </div>
      </div>
    );
  }
}

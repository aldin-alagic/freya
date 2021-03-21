import React from "react";
import { PropTypes } from "prop-types";
import draftToHtml from "draftjs-to-html";

export class DescriptionRichText extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired,
  };

  static defaultProps = {
    bold: false,
  };

  render() {
    const { title, text } = this.props;
    return (
      <div>
        <h5 className="text-primary bg-light p-2">{title}</h5>
        <div
          className="my-3 px-3"
          dangerouslySetInnerHTML={{
            __html: draftToHtml(text),
          }}
        />
      </div>
    );
  }
}

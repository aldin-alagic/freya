import React from "react";
import { PropTypes } from "prop-types";

import { DescriptionText } from "../../descriptionText/DescriptionText";
import { DescriptionRichText } from "../../descriptionRichText/DescriptionRichText";
import { ItemList } from "../../itemList/ItemList";
import { Thumbnails } from "../../thumbnails/Thumbnails";

export class SolutionSection extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    parts: PropTypes.arrayOf(PropTypes.string),
    tools: PropTypes.arrayOf(PropTypes.string),
    attachments: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    parts: [],
    tools: [],
    attachments: [],
  };

  render() {
    const { title, description, parts, tools, attachments } = this.props;
    return (
      <React.Fragment>
        <DescriptionText title="Solution title" text={title} />
        <DescriptionRichText
          title="Solution description"
          text={description}
        />
        <ItemList title="Parts" items={parts} />
        <ItemList title="Tools" items={tools} />
        <Thumbnails
          title="Solution attachments"
          attachments={attachments}
        />
      </React.Fragment>
    );
  }
}

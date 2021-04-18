import React from "react";
import { PropTypes } from "prop-types";

import { DescriptionText } from "../../descriptionText/DescriptionText";
import { ItemList } from "../../itemList/ItemList";
import { Thumbnails } from "../../thumbnails/Thumbnails";

export class IssueSection extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    codes: PropTypes.arrayOf(PropTypes.string),
    attachments: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    codes: [],
    attachments: [],
  };

  render() {
    const { type, option, description, codes, attachments } = this.props;
    return (
      <React.Fragment>
        <DescriptionText
            title="Issue type"
            text={`${type} - ${option}`}
            bold
        />
        <ItemList title="Issue codes" items={codes} />
        <DescriptionText
            title="Issue description"
            text={description}
        />
        <Thumbnails title="Issue attachments" attachments={attachments} />
      </React.Fragment>
    );
  }
}

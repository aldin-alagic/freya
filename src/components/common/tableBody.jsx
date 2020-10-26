import React, { Component } from "react";
import _ from "lodash";
import { withRouter } from "react-router-dom";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  handleRowClick = (url) => {
    this.props.history.push(url);
  };

  createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  render() {
    const { data, columns, baseUrl } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="clickable"
            onClick={() => this.handleRowClick(baseUrl + item.id + "/")}
          >
            {columns.map((column) => (
              <td className="text-center" key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default withRouter(TableBody);

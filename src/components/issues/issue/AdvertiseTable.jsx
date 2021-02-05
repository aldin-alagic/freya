import React from "react";
import { PropTypes } from "prop-types";

import { Table } from "../../common/Table";

export class AdvertiseTable extends React.PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortColumn: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
  };

  columns = [
    { path: "option", label: "Option" },
    { path: "price", label: "Price" },
    { path: "valid", label: "Valid until" },
    { path: "status", label: "Status" },
    {
      key: "options",
      content: (option) => (
        <div>
          <button
            onClick={() => this.props.onActivate(option)}
            className="btn btn-sm btn-success btn-xs m-1"
          >
            Activate
          </button>
        </div>
      ),
      label: "Options",
    },
  ];

  render() {
    const { options, onSort, sortColumn } = this.props;
    return (
      <div className="m-1">
        <Table
          columns={this.columns}
          data={options}
          sortColumn={sortColumn}
          onSort={onSort}
          onRowClick={this.handleRowClick}
          baseUrl="/options/"
        />
      </div>
    );
  }
}

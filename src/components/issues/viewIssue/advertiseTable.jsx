import React, { Component } from "react";
import Table from "../../common/table";

class AdvertiseTable extends Component {
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
export default AdvertiseTable;

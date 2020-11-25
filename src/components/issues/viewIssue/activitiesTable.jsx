import React, { Component } from "react";
import Table from "../../common/table";

class ActivitiesTable extends Component {
  columns = [
    { path: "type", label: "Type" },
    { path: "date", label: "Date" },
    { path: "user", label: "User" },
    { path: "price", label: "Price" },
  ];

  render() {
    const { activities, onSort, sortColumn } = this.props;
    return (
      <div className="m-1">
        <Table
          columns={this.columns}
          data={activities}
          sortColumn={sortColumn}
          onSort={onSort}
          onRowClick={this.handleRowClick}
          baseUrl="/activities/"
        />
      </div>
    );
  }
}
export default ActivitiesTable;

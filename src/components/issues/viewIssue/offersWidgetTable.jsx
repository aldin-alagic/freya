import React, { Component } from "react";
import Table from "./../../common/table";

class OffersWidgetTable extends Component {
  columns = [
    { path: "expert", label: "Expert" },
    { path: "standard", label: "Standard" },
    { path: "premium", label: "Premium" },
  ];

  render() {
    const { offers, onSort, sortColumn } = this.props;
    return (
      <div className="m-1 mt-4">
        <Table
          columns={this.columns}
          data={offers}
          sortColumn={sortColumn}
          onSort={onSort}
          onRowClick={this.handleRowClick}
          baseUrl="/offers/"
        />
      </div>
    );
  }
}
export default OffersWidgetTable;

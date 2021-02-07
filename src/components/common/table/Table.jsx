import React from "react";
import { PropTypes } from "prop-types";

import { TableHeader } from "./tableHeader/TableHeader";
import TableBody from "./tableBody/TableBody";

export class Table extends React.PureComponent {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortColumn: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    baseUrl: PropTypes.string.isRequired,
  };

  render() {
    const { columns, sortColumn, onSort, baseUrl, data } = this.props;
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <TableHeader
            columns={columns}
            sortColumn={sortColumn}
            onSort={onSort}
          />
          <TableBody columns={columns} data={data} baseUrl={baseUrl} />
        </table>
      </div>
    );
  }
}

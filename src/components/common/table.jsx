import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, baseUrl, data }) => {
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
};

export default Table;

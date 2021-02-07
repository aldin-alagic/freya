import React, { useState } from "react";
import _ from "lodash";

import { Pagination } from "../../../common/pagination/Pagination";
import { paginate } from "./../../../../utils/paginate";
import { AdvertiseTable } from "./advertiseTable/AdvertiseTable";

export function Advertise() {
  const options = [
    {
      id: 1,
      option: "Standard",
      price: "50 Tokens",
      valid: "25.12.2020.",
      status: "Active",
    },
    {
      id: 2,
      option: "Premium",
      price: "80 Tokens",
      valid: "-",
      status: "Inactive",
    },
  ];

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({
    path: "expert",
    order: "asc",
  });

  const sorted = _.orderBy(options, [sortColumn.path], [sortColumn.order]);
  const optionsResult = paginate(sorted, currentPage, pageSize);

  return (
    <React.Fragment>
      <h5 className="text-primary bg-light p-2">Advertise</h5>
      <div className="mt-4 px-3">
        <AdvertiseTable
          options={optionsResult}
          sortColumn={sortColumn}
          onSort={setSortColumn}
        />
        <Pagination
          itemsCount={options.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import _ from "lodash";

import { OffersTable } from "./offersTable/OffersTable";
import { Pagination } from "../../../common/pagination/Pagination";
import { paginate } from "./../../../../utils/paginate";
export function Offers() {
  const offers = [
    {
      id: 1,
      expert: "Jon Doe",
      standard: "100 tokens",
      premium: "120 tokens",
      start: "10.05.2020",
      days: 4,
    },
    {
      id: 2,
      expert: "Jane Doe",
      standard: "110 tokens",
      premium: "140 tokens",
      start: "12.05.2020",
      days: 5,
    },
    {
      id: 3,
      expert: "C",
      standard: "120 tokens",
      premium: "160 tokens",
      start: "14.05.2020",
      days: 3,
    },
    {
      id: 4,
      expert: "D",
      standard: "130 tokens",
      premium: "180 tokens",
      start: "10.05.2020",
      days: 2,
    },
    {
      id: 5,
      expert: "E",
      standard: "140 tokens",
      premium: "190 tokens",
      start: "11.05.2020",
      days: 5,
    },
    {
      id: 6,
      expert: "F",
      standard: "120 tokens",
      premium: "160 tokens",
      start: "10.05.2020",
      days: 7,
    },
    {
      id: 7,
      expert: "G",
      standard: "130 tokens",
      premium: "180 tokens",
      start: "14.05.2020",
      days: 4,
    },
    {
      id: 8,
      expert: "H",
      standard: "140  tokens",
      premium: "190 tokens",
      start: "17.05.2020",
      days: 3,
    },
  ];

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({
    path: "expert",
    order: "asc",
  });

  const sorted = _.orderBy(offers, [sortColumn.path], [sortColumn.order]);
  const offersResult = paginate(sorted, currentPage, pageSize);

  return (
    <div>
      <h5 className="text-primary bg-light p-2">Offers</h5>
      <div className="px-3">
        <h6 className="ml-1 my-3">
          There are
          <span className="text-primary text-weight-bold">
            {" "}
            {offers.length}{" "}
          </span>
          offers for your issue.
        </h6>
        <OffersTable
          offers={offersResult}
          sortColumn={sortColumn}
          onSort={setSortColumn}
        />
        <Pagination
          itemsCount={offers.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

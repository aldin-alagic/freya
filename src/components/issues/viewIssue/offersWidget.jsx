import React, { useState } from "react";
import OffersWidgetTable from "./offersWidgetTable";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import _ from "lodash";

function OffersWidget() {
  const [offers, setOffers] = useState([
    { id: 1, expert: "A", standard: "100 tokens", premium: "120 tokens" },
    { id: 2, expert: "B", standard: "110 tokens", premium: "140 tokens" },
    { id: 3, expert: "C", standard: "120 tokens", premium: "160 tokens" },
    { id: 4, expert: "D", standard: "130 tokens", premium: "180 tokens" },
    { id: 5, expert: "E", standard: "140 tokens", premium: "190 tokens" },
    { id: 6, expert: "F", standard: "120 tokens", premium: "160 tokens" },
    { id: 7, expert: "G", standard: "130 tokens", premium: "180 tokens" },
    { id: 8, expert: "H", standard: "140  tokens", premium: "190 tokens" },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortColumn, setSortColumn] = useState({
    path: "expert",
    order: "asc",
  });

  const sorted = _.orderBy(offers, [sortColumn.path], [sortColumn.order]);
  const offersResult = paginate(sorted, currentPage, pageSize);

  return (
    <div className="col-md-4">
      <hr className="d-block d-sm-none" />
      <h5 className="text-primary bg-light p-2">Offers</h5>
      <OffersWidgetTable
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
  );
}

export default OffersWidget;

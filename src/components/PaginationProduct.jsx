import { Pagination } from "keep-react";
import { useState } from "react";

export const PaginationProduct = (props) => {
  const {currentPage, setCurrentPage} = props;
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={(val) => setCurrentPage(val)}
      totalPages={10}
      iconWithOutText
      prevNextShape="roundSquare"
    />
  );
}
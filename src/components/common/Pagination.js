import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
      <div className="pagination d-flex justify-content-center mt-5">
        <a href="#!" className="rounded" onClick={handlePrev}>
          «
        </a>
        {pages.map((page) => (
          <a
            key={page}
            href="#!"
            className={`rounded ${page === currentPage ? "active" : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        ))}
        <a href="#!" className="rounded" onClick={handleNext}>
          »
        </a>
      </div>
    </div>
  );
};

export default Pagination;

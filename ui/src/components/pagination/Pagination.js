import React from 'react';

const Pagination = ({ totalEmployees, employeesPerPage, paginate }) => {
  const pageNumbers = [];
  const buffer = 5;
  const pageCount = Math.ceil(totalEmployees / employeesPerPage);

  for (let i = 1; i <= pageCount; i++) {
    if (i <= buffer || pageCount - buffer <= i) {
      pageNumbers.push(i);
    } else if (i % 5 === 0) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-sm">
        <li class="page-item">
          <a class="page-link" href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

import { useState } from "react";
import PropTypes from "prop-types";

const Pagination = ({ className }) => {
  const [page, setPage] = useState(1);

  return (
    <div className={`flex gap-[8px] items-center justify-center ${className}`}>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1 ? true : false}
      >
        <img src="/prev-page.svg" alt="" />
      </button>
      <p className="text-darkYellow font-semibold text-[15px] md:text-[18px]">
        Page {page} of 5
      </p>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page < 5 ? false : true}
      >
        <img src="/next-page.svg" alt="" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
};

export { Pagination };

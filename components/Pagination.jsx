import Link from "next/link";
import React from "react";

const Pagination = ({ page, pageSize, totalCount }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const nextPage = page + 1;
  const prevPage = page - 1;
  return (
    <section className="flex justify-center items-center container mx-auto my-10">
      {prevPage >= 1 && (
        <Link
          href={`/properties?page=${prevPage}`}
          className="mr-2 px-2 py-1 border-gray-300 rounded border"
        >
          Previous
        </Link>
      )}
      <span className="mx-2">{`Page ${page} of ${totalPages} `}</span>
      {nextPage <= totalPages && (
        <Link
          href={`/properties?page=${nextPage}`}
          className="ml-2 px-2 py-1 border-gray-300 rounded border"
        >
          Next
        </Link>
      )}
    </section>
  );
};

export default Pagination;

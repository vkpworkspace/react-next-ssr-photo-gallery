import "../styles/pagination.css";

const Pagination = ({
  prefixString,
  searchQuery,
  totalCount,
  pageIndex
}: {
  prefixString: string;
  searchQuery: string;
  totalCount: number;
  pageIndex: number
}) => {
  return (
    <div className="pagination">
      <div className="pagination-left">
        <p>
          {prefixString} {searchQuery} Stock photos and Images ({totalCount})
        </p>
      </div>
      <div className="pagination-right">
        <div>page {pageIndex} of {totalCount/5}</div>
        <div>Go to page</div>
      </div>
    </div>
  );
};

export default Pagination;

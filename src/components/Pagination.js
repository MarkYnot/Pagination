const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("pageNumber", pageNumbers);
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li className="page-item" key={number}>
              <a
                href="!#"
                className="page-link"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;

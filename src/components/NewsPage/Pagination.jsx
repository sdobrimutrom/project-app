import React from "react";

const Pagination = ({ totalNews, newsPerPage, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul style = {{ display: "flex", listStyle: "none", gap:"10px" }}>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            style={{
                                padding: "5px 10px",
                                backgroundColor: number === currentPage ? "blue" : "gray",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
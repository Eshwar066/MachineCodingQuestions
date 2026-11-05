import { useState } from "react";

const data = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));

const ITEMS_PER_PAGE = 5;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // Calculate items for current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Pagination</h2>

      {/* List Items */}
      {currentItems.map((item) => (
        <div
          key={item.id}
          style={{
            padding: "10px",
            margin: "5px",
            border: "1px solid gray",
          }}
        >
          {item.name}
        </div>
      ))}

      {/* Pagination Controls */}
      <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i+1).map(
          (page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              style={{
                backgroundColor:
                  currentPage === page ? "blue" : "white",
                color: currentPage === page ? "white" : "black",
              }}
            >
              {page}
            </button>
          )
        )}

        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
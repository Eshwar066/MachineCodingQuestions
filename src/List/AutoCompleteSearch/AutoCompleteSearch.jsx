
import React, { useEffect, useState } from "react";

const AutoCompleteSearch = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Clear data if input is empty
    if (!search.trim()) {
      setData([]);
      setLoading(false);
      setError("");
      return;
    }

    // Create debounce timer
    const timer = setTimeout(async () => {
      // const controller = new AbortController();

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`,
          // { signal: controller.signal }
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        setData(data.products || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
          setData([]);
        }
      } finally {
        // if (!controller.signal.aborted) {
          setLoading(false);
        // }
      }
    }, 500);

    // Cleanup previous timer
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Debounced Search</h2>
      <h3>First implement the basic search and debounce. Then add loading/error states, API cleanup, empty states, and finally improve the UI. This demonstrates incremental problem-solving.</h3>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid gray",
          borderRadius: "6px",
        }}
      />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && data.length > 0 && (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {data.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && search.trim() && data.length === 0 && (
        <p>No results found</p>
      )}
    </div>
  );
};

export default AutoCompleteSearch;

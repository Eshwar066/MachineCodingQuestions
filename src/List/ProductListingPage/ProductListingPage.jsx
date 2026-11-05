
import React, { useMemo, useState } from "react";

const products = [
  { id: 1, name: "iPhone 16", category: "Electronics", price: 79999 },
  { id: 2, name: "Samsung S25", category: "Electronics", price: 84999 },
  { id: 3, name: "MacBook Air", category: "Electronics", price: 114999 },
  { id: 4, name: "Nike Shoes", category: "Fashion", price: 4999 },
  { id: 5, name: "Adidas T-Shirt", category: "Fashion", price: 1999 },
  { id: 6, name: "Office Chair", category: "Furniture", price: 8999 },
  { id: 7, name: "Study Table", category: "Furniture", price: 5999 },
  { id: 8, name: "Headphones", category: "Electronics", price: 2999 },
];

const ProductListing = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(150000);
  const [sortOrder, setSortOrder] = useState("");

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search by product name
    if (search.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category
    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // Filter by maximum price
    result = result.filter(
      (product) => product.price <= maxPrice
    );

    // Sort by price
    if (sortOrder === "low-to-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, category, maxPrice, sortOrder]);

  // Clear all filters
  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setMaxPrice(150000);
    setSortOrder("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h2>Product Listing</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Furniture">Furniture</option>
      </select>

      {/* Price Filter */}
      <div>
        <label>Maximum Price: ₹{maxPrice}</label>
        <input
          type="range"
          min="0"
          max="150000"
          step="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      {/* Sorting */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort by Price</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>

      {/* Clear Filters */}
      <button onClick={clearFilters}>
        Clear Filters
      </button>

      {/* Product Count */}
      <h3>
        Showing {filteredProducts.length} of {products.length} products
      </h3>

      {/* Product List */}
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                marginBottom: "10px",
              }}
            >
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price.toLocaleString("en-IN")}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;

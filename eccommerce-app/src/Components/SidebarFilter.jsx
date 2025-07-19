// src/Components/SidebarFilter.jsx
import React, { useEffect, useState } from 'react';

export default function SidebarFilter({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h5 className="mb-3">Categories</h5>
      <ul className="list-group">
        <li
          className={`list-group-item ${!selectedCategory ? 'active' : ''}`}
          onClick={() => setSelectedCategory("")}
          style={{ cursor: 'pointer' }}
        >
          All
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`list-group-item ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
            style={{ cursor: 'pointer' }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';

export default function FilterBar({
  selectedCategory,
  setSelectedCategory,
  sortOption,
  setSortOption,
  search,
  setSearch
}) {
  return (
    <div className="mb-4">
      <div className="row">
        {/* <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option value={cat} key={cat}>{cat}</option>
            ))}
          </select>
        </div> */}

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
            <option value="rating-desc">Rating High to Low</option>
          </select>
        </div>

        <div className="col-md-8 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

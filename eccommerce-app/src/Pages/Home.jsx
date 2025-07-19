// src/Pages/Home.jsx
import React, { useState } from 'react';
import SidebarFilter from '../Components/SidebarFilter';
import ProductList from '../Components/ProductList';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Sidebar for categories */}
        <div className="col-md-3 border-end">
          <SidebarFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Main product section */}
        <div className="col-md-9">
          <h2 className="fw-bold mb-2">DISCOVER OUR PRODUCTS</h2>
          <p className="text-muted mb-4">
            Explore a wide range of premium quality products tailored to your style and needs.
          </p>

          <ProductList selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}

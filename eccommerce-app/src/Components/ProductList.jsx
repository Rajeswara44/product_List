import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Shimmer from './Shimmer';
import FilterBar from './FilterBar';
import ProductDetails from './ProductDetails';

export default function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterAndSort();
  }, [products, selectedCategory, sortOption, search]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const filterAndSort = () => {
    let temp = [...products];

    if (selectedCategory) {
      temp = temp.filter((p) => p.category === selectedCategory);
    }

    if (search.trim()) {
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOption === "price-asc") {
      temp.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      temp.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating-desc") {
      temp.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
    }

    setDisplayedProducts(temp);
  };

  // ---- ADD TO CART HANDLER that uses localStorage ----
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      cart = cart.map(item =>
        item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item
      );
    } else {
      cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Added "${product.title}" to cart!`);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  if (loading) return <Shimmer count={8} />;

  return (
    <div>
      {/* Top filter bar (sort + search) */}
      <FilterBar
        sortOption={sortOption}
        setSortOption={setSortOption}
        search={search}
        setSearch={setSearch}
      />

      {/* Product Grid or Product Details */}
      {selectedProduct ? (
        <div>
          <button className="btn btn-secondary mb-3" onClick={() => setSelectedProduct(null)}>
            &larr; Back to Products
          </button>
          <ProductDetails product={selectedProduct} onAddToCart={handleAddToCart} />
        </div>
      ) : (
        <div className="row">
          {displayedProducts.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <ProductCard product={product} onAddToCart={handleAddToCart} onClick={() => handleProductClick(product)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

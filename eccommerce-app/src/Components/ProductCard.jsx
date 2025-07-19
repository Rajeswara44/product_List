import React from 'react';

export default function ProductCard({ product, onAddToCart, onClick }) {
  return (
    <div className="card h-100 shadow-sm" onClick={onClick} style={{ cursor: "pointer" }}>
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title text-truncate" title={product.title}>
          {product.title}
        </h6>
        <p className="text-muted small mb-2">{product.category}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto mb-3">
          <span className="fw-bold">${product.price.toFixed(2)}</span>
          <span className="badge bg-warning text-dark">
            ⭐ {product.rating?.rate || 0}
          </span>
        </div>
        <button
          className="btn btn-primary w-100 mt-auto"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

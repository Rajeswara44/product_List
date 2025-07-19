import React from 'react';

export default function ProductDetails({ product, onAddToCart }) {
  if (!product) {
    return <div>No product details available.</div>;
  }

  return (
    <div className="card shadow-sm">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "300px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="text-muted small mb-2">{product.category}</p>
        {product.description && (
          <p className="card-text mb-3">{product.description}</p>
        )}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-bold">${product.price.toFixed(2)}</span>
          <span className="badge bg-warning text-dark">
            ⭐ {product.rating?.rate || 0}
          </span>
        </div>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

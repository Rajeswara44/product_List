import React, { useEffect, useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  // Helper to sync state and localStorage
  const updateCartStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    let updated = cart.filter(item => item.id !== id);
    updateCartStorage(updated);
  };

  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
    );
    updateCartStorage(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id && (item.qty || 1) > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    updateCartStorage(updated);
  };

  const total = cart.reduce(
    (acc, item) => acc + (item.qty || 1) * item.price, 0
  );

  return (
    <div className="container mt-4">
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div className="card mb-3" key={item.id}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.title.slice(0, 40)}</h5>
                  <div className="mb-2">
                    <span className="text-muted">Price: </span>
                    ${item.price}
                  </div>
                  <div>
                    <span className="text-muted">Qty: </span>
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => decreaseQty(item.id)}
                      disabled={(item.qty || 1) <= 1}
                    >-</button>
                    <span>{item.qty || 1}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary ms-2"
                      onClick={() => increaseQty(item.id)}
                    >+</button>
                  </div>
                  <div className="mt-2">
                    <strong>
                      Subtotal: ${((item.qty || 1) * item.price).toFixed(2)}
                    </strong>
                  </div>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h5>Total: ${total.toFixed(2)}</h5>
        </>
      )}
    </div>
  );
}

export default Cart;

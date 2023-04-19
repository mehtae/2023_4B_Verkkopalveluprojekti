import React from "react";

function Cart({ items, handleRemove, handleCheckout }) {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price} USD</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

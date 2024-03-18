import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
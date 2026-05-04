import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Cart Total: {cartItems.length}</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} is in your cart</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart

import { useState } from "react";
import Navbar from "../components/nav";
import "./cart.css";
export default function Cart({ cart }) {
  const [items, setItems] = useState(cart);

  const updateCard = (product) => {
    setItems([...items, product]);
  };

  const cartSum = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <>
      <Navbar cart={cart} />
      <p>Cart</p>
      <div className="cartContents">
        {items.map((item) => (
          <div key={item.id} id={item.id} className="cartItem">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))}
        <div className="checkout">
          <p>Total: ${cartSum(items).toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
}

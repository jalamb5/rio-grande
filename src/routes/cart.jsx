import { useState } from "react";
import Navbar from "../components/nav";

export default function Cart({ cart }) {
  const [items, setItems] = useState(cart);

  const updateCard = (product) => {
    setItems([...items, product]);
  };

  return (
    <>
      <Navbar cart={cart} />
      <p>Cart</p>
    </>
  );
}

import { useState } from "react";
import Navbar from "../components/nav";

export default function Cart(product = null) {
  const [items, setItems] = useState([]);

  const updateCard = (product) => {
    setItems([...items, product]);
  }

  return (
    <>
      <Navbar/>
      <p>Cart</p>
    </>
  )
}

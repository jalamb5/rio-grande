import { useState, useEffect } from "react";
import Navbar from "../components/nav";
import "./root.css";

export default function Root() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Navbar />
      <div id="allProducts">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="productImage">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="pricing">
              <p>${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

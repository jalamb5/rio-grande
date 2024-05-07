import Navbar from "../components/nav";
import "./root.css";

export default function Root({ products, addToCart, cart }) {
  return (
    <>
      <Navbar cart={cart} />
      <div id="allProducts">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="productImage">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="pricing">
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

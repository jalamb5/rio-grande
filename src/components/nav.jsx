import "./nav.css";
import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  let itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <Link to="/cart">
        <button>Cart ({itemCount})</button>
      </Link>
    </header>
  );
}

import './nav.css';

export default function Navbar() {
  let itemCount = 0

  return (
    <header>
      <h1>
        <a href="/">Home</a>
      </h1>
      <a href="/cart">
        <button>Cart ({itemCount})</button>
      </a>
    </header>
  )
}


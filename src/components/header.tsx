import { Link } from "react-router-dom";

export default function Header() {
  const id = Math.floor(Math.random() * 10);

  return (
    <header>
      <h1>Header</h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={`/profile/${id}`}>
          <button>Profile with random ID</button>
        </Link>
        ;
      </nav>
    </header>
  );
}

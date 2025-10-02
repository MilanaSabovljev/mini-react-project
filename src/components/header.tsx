import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>;
      </nav>
    </header>
  );
}

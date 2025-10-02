import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <h1>Header</h1>
        <h2>dsd</h2>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>;<Link to="/contact">Contact</Link>;
        </nav>
      </header>
    </>
  );
}

export default function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>

        {/* random id Generator button  to send on id profile page*/}
        <a href="#">Profile</a>
      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-dark container">
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <h3>
        <Link to="/notes">Notes</Link>
      </h3>
      <h3>
        <Link to="/create">Create Note</Link>
      </h3>
    </nav>
  );
}

export default Navbar;

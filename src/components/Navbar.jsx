import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-dark container">
      <h5>
        <Link to="/">Home</Link>
      </h5>
      <h5>
        <Link to="/notes">Notes</Link>
      </h5>
      <h5>
        <Link to="/create">Create Note</Link>
      </h5>
    </nav>
  );
}

export default Navbar;

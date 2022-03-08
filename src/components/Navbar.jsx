import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar bg-dark container-fluid">
      <div className="container">
        <h5>
          <Link to="/" className="link">
            Home
          </Link>
        </h5>
        <h5>
          <Link to="/notes" className="link">
            Notes
          </Link>
        </h5>
        <h5>
          <Link to="/create" className="link">
            Create Note
          </Link>
        </h5>
      </div>
    </nav>
  );
}

export default Navbar;

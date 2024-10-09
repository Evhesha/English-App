import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <nav className="navbar">
      <div className="container">
        <header className="navbar-content">
          <div className="navbar-left">
            <button
              className={`toggle-btn ${isSidebarOpen ? 'open' : ''}`}
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? "×" : "≡"}
            </button>
            <ul className="nav-list">
              <li>
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/about-app"}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <Link className="btn btn-outline" to={"/login"}>
              Login
            </Link>
            <Link className="btn btn-primary" to={"/signUp"}>
              Sign-Up
            </Link>
          </div>
        </header>
      </div>
    </nav>
  );
}

export default Navbar;

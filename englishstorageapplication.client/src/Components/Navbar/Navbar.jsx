  import { Link } from "react-router-dom";
  import { useState } from "react";
  import "../Navbar/Navbar.css";

  function Navbar({ toggleSidebar, isSidebarOpen }) {
    const [isAdmin, setIsAdmin] = useState(true);

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
                {isAdmin ? <li>
                  <Link className="nav-link" to={"/admin"}>
                    Admin
                  </Link>
                </li>
                : ''

                }
              </ul>
            </div>
            <div className="navbar-right">
              <Link  to={"/profile-page"}>
                <i class="bi bi-person-circle" style={{ fontSize: '2.5rem' }}></i>
              </Link>
              <Link className="btn btn-outline-primary" to={"/login"} style={{paddingLeft: "10px", paddingRight: "10px"}}>
                Login <i className="bi bi-box-arrow-in-right"></i>
              </Link>
              <Link className="btn btn-outline-primary" to={"/signUp"} style={{paddingLeft: "10px", paddingRight: "10px"}}>
                Sign-Up <i className="bi bi-clipboard2-check"></i>
              </Link>
            </div>
          </header>
        </div>
      </nav>
    );
  }

  export default Navbar;

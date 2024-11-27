import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Navbar/Navbar.css";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  const [isAdmin, setIsAdmin] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Проверяем сохраненную тему при загрузке
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

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
              {isAdmin ? (
                <li>
                  <Link className="nav-link" to={"/admin"}>
                    Admin
                  </Link>
                </li>
              ) : ''}
            </ul>
          </div>
          <div className="navbar-right">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
            </button>
            <Link to={"/profile-page"}>
              <i className="bi bi-person-circle" style={{ fontSize: '2.5rem' }}></i>
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
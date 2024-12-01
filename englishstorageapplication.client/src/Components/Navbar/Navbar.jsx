import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      console.log(token);
      if (token) {
        // Use jwt-decode to decode the token
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken); // Logging decoded token to check its content
        const userId = decodedToken.role; // Extract UserId from token

        if (userId === "Admin"){
          setIsAdmin(true);
        }

        // Request user cards
        axios
          .get(`https://localhost:5001/api/UsersCards/${userId}`)
          .then((response) => {
            setCards(response.data);
            setAuthorized(true);
          })
          .catch((error) => {
            console.error("Error fetching cards:", error);
            setAuthorized(false);
          });
      }
    };

    fetchData();
  }, []);

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
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/about-app"}>
                {t("about")}
                </Link>
              </li>
              {isAdmin ? (
                <li>
                  <Link className="nav-link" to={"/admin"}>
                  {t("admin")}
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
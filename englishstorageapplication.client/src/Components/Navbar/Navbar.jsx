import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../ThemeProvider/ThemeProvider";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setTeacher] = useState(true);
  const { darkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const notify = () => {
    toast.success("Theme changed!", {
      position: "bottom-right",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const userRole = decodedToken.role;

          if (userRole === "Admin") {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        //Teacher if
        } catch (error) {
          console.error("Error decoding token:", error);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <header className="navbar-content">
          <div className="navbar-left">
            <button
              className={`toggle-btn ${isSidebarOpen ? "open" : ""}`}
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? "×" : "≡"}
            </button>
            <ul className="nav-list">
              <li>
                <Link className="nav-link" to={"/home"}>
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/about-app"}>
                  {t("navbar.about")}
                </Link>
              </li>
              {isAdmin && (
                <li>
                  <Link className="nav-link" to={"/admin"}>
                    {t("navbar.admin")}
                  </Link>
                </li>
              )}
              {isTeacher && (
                <li>
                  <Link className="nav-link" to={"/teacher"}>
                    {t("navbar.teacher")}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-right">
            <button
              className="theme-toggle-btn"
              onClick={() => {
                toggleTheme();
                notify();
              }}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <i className={`bi ${darkMode ? "bi-sun" : "bi-moon"}`}></i>
            </button>
            <Link to={"/profile-page"}>
              <i
                className="bi bi-person-circle"
                style={{ fontSize: "2.5rem" }}
              ></i>
            </Link>
            <Link
              className="btn btn-outline-primary"
              to={"/login"}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              Login <i className="bi bi-box-arrow-in-right"></i>
            </Link>
            <Link
              className="btn btn-outline-primary"
              to={"/signUp"}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              Sign-Up <i className="bi bi-clipboard2-check"></i>
            </Link>
          </div>
        </header>
      </div>
    </nav>
  );
}

export default Navbar;

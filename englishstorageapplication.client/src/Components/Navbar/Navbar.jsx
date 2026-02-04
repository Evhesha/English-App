import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../ThemeProvider/ThemeProvider";

function Navbar({ toggleSidebar, isSidebarOpen }) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);
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

                    if (userRole === "Teacher"){
                        setIsTeacher(true);
                    } else {
                        setIsTeacher(false);
                    }
                } catch (error) {
                    setIsAdmin(false);
                    setIsTeacher(false);
                }
            } else {
                setIsAdmin(false);
                setIsTeacher(false);
            }
        };
        fetchData();
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-content">
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
                    <Link to={"/profile-page"} className="profile-link">
                        <i className="bi bi-person-circle"></i>
                    </Link>
                    <Link
                        className="btn-apple btn-login"
                        to={"/login"}
                    >
                        <i className="bi bi-box-arrow-in-right"></i>
                        {t("navbar.login")}
                    </Link>
                    <Link
                        className="btn-apple btn-signup"
                        to={"/signUp"}
                    >
                        <i className="bi bi-person-plus"></i>
                        {t("navbar.signup")}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
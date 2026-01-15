import { Link, useNavigate } from "react-router-dom";
import "../Sidebar/Sidebar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {jwtDecode} from "jwt-decode";
import Form from 'react-bootstrap/Form';
import ChatLink from "./ChatButtons/ChatLink.jsx";
import NewChatButton from "./ChatButtons/NewChatButton.jsx";
import axios from "axios";

function Sidebar() {
    const [chats, setChats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure that you want to logout?");
        if (!confirmLogout) return;

        Cookies.remove("token");
        navigate("/login");
        window.location.reload() 
    };

    const handleDelete = (id) => {
        setChats(chats.filter((chat) => chat.id !== id));
    };

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            setIsLoading(false);
            return;
        }

        const fetchChats = async () => {
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.userId;

                const response = await axios.get(`http://localhost:5199/user/${userId}/chats/summary`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setChats(response.data);
            } catch (error) {
                console.log("Error fetching chats:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchChats();
    }, []); 

    if (isLoading) {
        return (
            <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
                <div className="text-muted">Loading...</div>
            </div>
        );
    }

    return (
        <>
            <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#lessons-collapse"
                            aria-expanded="false"
                        >
                            <strong className="large-text">{t("sidebar.lessons")}</strong>
                        </button>
                        <div className="collapse" id="lessons-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>
                                    <Link
                                        to="/list-lessons-page"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        {t("sidebar.app-lessons")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/online-list-lessons-page"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        {t("sidebar.online-lessons")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="mb-1">
                        <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="false"
                        >
                            <strong className="large-text">{t("sidebar.dictionary")}</strong>
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>
                                    <Link
                                        to="/my-dict-page"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        {t("sidebar.my-dictionary")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/topics-page"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        {t("sidebar.topics")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/thousamd-popular"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        {t("sidebar.100-popular")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/words-in-parts"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        {t("sidebar.words-in-parts")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#orders-collapse"
                            aria-expanded="false"
                        >
                            <strong className="large-text">{t("sidebar.tests")}</strong>
                        </button>
                        <div className="collapse" id="orders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>
                                    <Link
                                        to="/topics-tests"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        {t("sidebar.by-time")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/mixed-tests"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        {t("sidebar.by-topic")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/level-tests"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        {t("sidebar.by-level")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#account-collapse"
                            aria-expanded="false"
                        >
                            <strong className="large-text">{t("sidebar.account")}</strong>
                        </button>
                        <div className="collapse" id="account-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>
                                    <Link
                                        to="/profile-page"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        <i className="bi bi-person-fill"></i>{t("sidebar.profile")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/setting-page"
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        <i className="bi bi-gear-wide-connected"></i> {t("sidebar.settings")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        onClick={handleLogout}
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        <i className="bi bi-door-closed"></i> {t("sidebar.sign-out")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#assistant-collapse"
                            aria-expanded="false"
                        >
                            <i className="bi bi-magic"></i>
                            <strong className="large-text">{t("sidebar.assistant")}</strong>
                        </button>
                        <div className="collapse" id="assistant-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <NewChatButton />
                                <Form.Control size="sm" type="text" placeholder="Search" className="search-control"/>
                                {chats.length === 0 ? (
                                    <div className="text-muted small p-2">No chats yet</div>
                                ) : (
                                    chats.map(chat => (
                                        <ChatLink
                                            key={chat.id}
                                            id={chat.id}
                                            name={chat.title}
                                            onDelete={() => handleDelete(chat.id)}
                                        />
                                    ))
                                )}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;